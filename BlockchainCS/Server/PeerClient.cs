using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace BlockchainCS
{
    public class PeerClient
    {
        public class BlockPeer
        {
            public ulong BlockID;
            public string IPAddress;
            public int Port;
        }

        public class StateObject
        {
            // Size of receive buffer.  
            public const int BufferSize = 1024;

            // Receive buffer.  
            public byte[] buffer = new byte[BufferSize];

            // Received data string.
            public StringBuilder sb = new StringBuilder();

            // Client socket.
            public Socket workSocket = null;
        }

        // Thread signal.  
        public static ManualResetEvent allDone = new ManualResetEvent(false);

        public PeerClient()
        {
        }

        public static void StartAnnouncement()
        {
            while (true)
            {
                try
                {

                    // Establish the remote endpoint 
                    // for the socket. This example 
                    // uses port 11111 on the local 
                    // computer.
                    //IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());
                    //IPAddress ipAddr = ipHost.AddressList[0];
                    //IPEndPoint localEndPoint = new IPEndPoint(ipAddr, 8008);

                    IPAddress ipAddress = Dns.Resolve("localhost").AddressList[0];
                    IPEndPoint localEndPoint = new IPEndPoint(ipAddress, 8008);

                    // Creation TCP/IP Socket using 
                    // Socket Class Constructor
                    Socket sender = new Socket(ipAddress.AddressFamily, SocketType.Stream, ProtocolType.Tcp);

                    try
                    {
                        sender.Connect(localEndPoint);

                        Console.WriteLine("[Peer] Announce. Socket connected to -> {0} ", sender.RemoteEndPoint.ToString());

                        byte[] bytes = Encoding.UTF8.GetBytes("Announce:");
                        int byteSent = sender.Send(bytes);

                        byte[] messageReceived = new byte[1024];

                        //int byteRecv = sender.Receive(messageReceived);
                        //Console.WriteLine("Message from Server -> {0}", Encoding.UTF8.GetString(messageReceived, 0, byteRecv));

                        sender.Shutdown(SocketShutdown.Both);
                        sender.Close();
                    }
                    catch (ArgumentNullException ane)
                    {
                        Console.WriteLine("[Peer] Announce. ArgumentNullException : {0}", ane.ToString());
                    }
                    catch (SocketException se)
                    {
                        Console.WriteLine("[Peer] Announce. SocketException : {0}", se.ToString());
                    }

                    catch (Exception e)
                    {
                        Console.WriteLine("[Peer] Announce. Unexpected exception : {0}", e.ToString());
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine("[Peer] Announce. " + e.ToString());
                }

                Thread.Sleep(10000);
            }
        }

        public static void StartListening(object parameter)
        {
            int port = (int)parameter;

            //IPHostEntry ipHostInfo = Dns.GetHostEntry(Dns.GetHostName());
            //IPAddress ipAddress = ipHostInfo.AddressList[0];
            IPAddress ipAddress = Dns.Resolve("localhost").AddressList[0];
            IPEndPoint localEndPoint = new IPEndPoint(ipAddress, port);

            // Create a TCP/IP socket.  
            Socket listener = new Socket(ipAddress.AddressFamily, SocketType.Stream, ProtocolType.Tcp);

            // Bind the socket to the local endpoint and listen for incoming connections.  
            try
            {
                listener.Bind(localEndPoint);
                listener.Listen(100);

                while (true)
                {
                    allDone.Reset();

                    Console.WriteLine("[Peer] Waiting for a connection...");
                    Thread announcementThread = new Thread(StartAnnouncement);
                    announcementThread.Start();

                    listener.BeginAccept(new AsyncCallback(AcceptCallback), listener);

                    allDone.WaitOne();
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }

            Console.WriteLine("\nPress ENTER to continue...");
            Console.Read();

        }

        public static void AcceptCallback(IAsyncResult ar)
        {
            // Signal the main thread to continue.  
            allDone.Set();

            Socket listener = (Socket)ar.AsyncState;
            Socket handler = listener.EndAccept(ar);

            StateObject state = new StateObject();
            state.workSocket = handler;
            handler.BeginReceive(state.buffer, 0, StateObject.BufferSize, 0, new AsyncCallback(ReadCallback), state);
        }

        public static void ReadCallback(IAsyncResult ar)
        {
            String content = String.Empty;
            StateObject state = (StateObject)ar.AsyncState;
            Socket handler = state.workSocket;

            int bytesRead = handler.EndReceive(ar);

            if (bytesRead > 0)
            {
                // There  might be more data, so store the data received so far.  
                state.sb.Append(Encoding.UTF8.GetString(state.buffer, 0, bytesRead));


                content = state.sb.ToString();
                string command = content.Split(':')[0];
                string addr = content.Split(':')[1].Trim();


                if (command == "GetPeersCallback")
                {
                    Console.WriteLine("[Peer] {0}", content);

                    //Block[] blocks = BlockchainDB.GetLatestBlocks(addr);

                    //string jsonString = JSON.ToJSON(blocks);

                    //Send(handler, jsonString);
                }
            }
        }

        private static void Send(Socket handler, String data)
        {
            byte[] byteData = Encoding.UTF8.GetBytes(data);

            handler.BeginSend(byteData, 0, byteData.Length, 0, new AsyncCallback(SendCallback), handler);
        }

        private static void SendCallback(IAsyncResult ar)
        {
            try
            {
                Socket handler = (Socket)ar.AsyncState;

                int bytesSent = handler.EndSend(ar);
                //Console.WriteLine("Sent {0} bytes to client.", bytesSent);

                handler.Shutdown(SocketShutdown.Both);
                handler.Close();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}
