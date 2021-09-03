using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace BlockchainCS
{ 
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

    public class AsynchronousSocketListener
    {
        // Thread signal.  
        public static ManualResetEvent allDone = new ManualResetEvent(false);

        public AsynchronousSocketListener()
        {
        }

        public static void StartListening()
        {
            //IPHostEntry ipHostInfo = Dns.GetHostEntry(Dns.GetHostName());
            //IPAddress ipAddress = ipHostInfo.AddressList[0];
            IPAddress ipAddress = Dns.Resolve("localhost").AddressList[0];
            IPEndPoint localEndPoint = new IPEndPoint(ipAddress, 8000);

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
 
                    Console.WriteLine("Waiting for a connection...");
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


                if (command == "GetBlocks")
                {
                    Console.WriteLine("{0}", content);

                    //Block[] blocks =
                    //{
                    //    new Block()
                    //    {
                    //        Age = 4.3f,
                    //        block = 5432221,
                    //        Txn = "dsdd232ewe",
                    //        Validator = "ddsalkdklkd-validator"
                    //    },
                    //    new Block()
                    //    {
                    //        Age = 4.3f,
                    //        block = 5432221,
                    //        Txn = "dsdd232ewe",
                    //        Validator = "ddsalkdklkd-validator"
                    //    },
                    //    new Block()
                    //    {
                    //        Age = 4.3f,
                    //        block = 5432221,
                    //        Txn = "dsdd232ewe",
                    //        Validator = "ddsalkdklkd-validator"
                    //    },
                    //};

                    Block[] blocks = BlockchainDB.GetLatestBlocks(addr);

                    string jsonString = JSON.ToJSON(blocks);

                    Send(handler, jsonString);
                }
                else if (command == "GetTransactions")
                {
                    Console.WriteLine("{0}", content);

                    //Transaction[] transactions = 
                    //{ new Transaction()
                    //    {
                    //        TransactionHash = "0009",
                    //        Age = 4.0f,
                    //        BlockID = "5232133",
                    //        FromAddress = "034392842380493289",
                    //        ToAddress = "342374032843294948328",
                    //        Key = "432342",
                    //        Value = "aqismximsoksm0"
                    //    },
                    //    new Transaction()
                    //    {
                    //        TransactionHash = "0009",
                    //        Age = 4.0f,
                    //        BlockID = "5232133",
                    //        FromAddress = "034392842380493289",
                    //        ToAddress = "342374032843294948328",
                    //        Key = "432342",
                    //        Value = "aqismximsoksm0"
                    //    },
                    //    new Transaction()
                    //    {
                    //        TransactionHash = "0009",
                    //        Age = 4.0f,
                    //        BlockID = "5232133",
                    //        FromAddress = "034392842380493289",
                    //        ToAddress = "342374032843294948328",
                    //        Key = "432342",
                    //        Value = "aqismximsoksm0"
                    //    },
                    //};

                    Transaction[] transactions = BlockchainDB.GetTransactionsByProfileAddress(addr);

                    string jsonString = JSON.ToJSON(transactions);

                    Send(handler, jsonString);
                }
                else if (command == "GetBlock")
                {
                    Console.WriteLine("{0}", content);

                    //Block block = new Block()
                    //{
                    //    block = 5432221,
                    //    Txn = "dsdd232ewe",
                    //    Validator = "ddsalkdklkd-validator"
                    //};

                    Block block = BlockchainDB.GetBlockById(addr);

                    string jsonString = JSON.ToJSON(block);

                    Send(handler, jsonString);
                }
                else if (command == "GetTransaction")
                {
                    Console.WriteLine("{0}", content);

                    //Transaction transaction = new Transaction()
                    //{
                    //    Signature = "0009",
                    //    BlockID = 5232133,
                    //    FromAddress = "034392842380493289",
                    //    ToAddress = "342374032843294948328",
                    //    Key = "432342",
                    //    Value = "aqismximsoksm0"
                    //};

                    Transaction transaction = BlockchainDB.GetTransactionById(addr);

                    string jsonString = JSON.ToJSON(transaction);

                    Send(handler, jsonString);
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
