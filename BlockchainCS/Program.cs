﻿using EllipticCurve;
using System;

namespace BlockchainCS
{
    public class Program
    {
        public static int Main(String[] args)
        {
            //KeyGenerator.GenerateKeys();
            const string ORIGIN_ADDRESS = "ORIGIN";

            PrivateKey privateKey = Crypto.EllipticCurve.Converters.Base62ToPrivateKey("C7820G4482BycKjC59QKOCsU7kqzpYRzIYKGdAP7THIa5zFSiLCjAW1mO5Au4400gXGW04vxzxMrNTdwjQlhWybXXgSAscrBGIwHwOKyDzQaLkP8GoOPYr1Ma3wc585OAfBblgCWzafmrjJzeNb1BSi5oJOZ3");
            PublicKey publicKey = privateKey.publicKey();

            string myProfileAddress = Crypto.EllipticCurve.Converters.KeyToBase62(publicKey);

            Blockchain.Difficulty = 1;
            Blockchain.Problem = "effa";
            Blockchain.BlockchainMode = BlockchainMode.TestNet;
            Blockchain atomic = new Blockchain();
            BlockchainDB.Atomic = atomic;
            atomic.chain.Add(Blockchain.CreateHeadBlock());
            atomic.VerifyPendingTransactions(ORIGIN_ADDRESS);

            Transaction tx0 = new Transaction();
            tx0.FromAddress = myProfileAddress;
            tx0.ToAddress = myProfileAddress;
            tx0.Key = "Name";
            tx0.Value = "Gerallt Franke";
            tx0.Timestamp = Transaction.GetTimestamp();
            tx0.SignTransaction(privateKey);

            atomic.AddTransaction(tx0);
            atomic.VerifyPendingTransactions(myProfileAddress);

            // Check if chain is valid.
            Console.WriteLine("Blockchain valid? " + (atomic.IsChainValid() ? "Yes" : "No"));

            Transaction tx1 = new Transaction();
            tx1.FromAddress = myProfileAddress;
            tx1.ToAddress = "test address 2";
            tx1.Key = "Name";
            tx1.Value = "Gerallt Franke";
            tx1.Timestamp = Transaction.GetTimestamp();
            tx1.SignTransaction(privateKey);

            atomic.AddTransaction(tx1);
            atomic.VerifyPendingTransactions(myProfileAddress);

            // Check if chain is valid.
            Console.WriteLine("Blockchain valid? " + (atomic.IsChainValid() ? "Yes" : "No"));

            Transaction tx2 = new Transaction();
            tx2.FromAddress = myProfileAddress;
            tx2.ToAddress = "test address 3";
            tx2.Key = "Country";
            tx2.Value = "Australia";
            tx2.Timestamp = Transaction.GetTimestamp();
            tx2.SignTransaction(privateKey);

            atomic.AddTransaction(tx2);
            atomic.VerifyPendingTransactions(myProfileAddress);

            Console.WriteLine("");
            Console.WriteLine("Current value of key: Name is: "+ atomic.GetValue(myProfileAddress, "Name"));

            // Check if chain is valid.
            Console.WriteLine("Blockchain valid? " + (atomic.IsChainValid() ? "Yes" : "No"));


            tx0 = new Transaction();
            tx0.FromAddress = myProfileAddress;
            tx0.ToAddress = myProfileAddress;
            tx0.Key = "Name";
            tx0.Value = "Gerallt Franke";
            tx0.Timestamp = Transaction.GetTimestamp();
            tx0.SignTransaction(privateKey);

            atomic.AddTransaction(tx0);
            atomic.VerifyPendingTransactions(myProfileAddress);

            tx0 = new Transaction();
            tx0.FromAddress = myProfileAddress;
            tx0.ToAddress = myProfileAddress;
            tx0.Key = "Country";
            tx0.Value = "Australia";
            tx0.Timestamp = Transaction.GetTimestamp();
            tx0.SignTransaction(privateKey);

            atomic.AddTransaction(tx0);
            atomic.VerifyPendingTransactions(myProfileAddress);

            Console.WriteLine("Blockchain valid? " + (atomic.IsChainValid() ? "Yes" : "No"));

            //atomic.chain[4].Transactions[0].ToAddress = "HACK!";

            Console.WriteLine("");
            Console.WriteLine("Current value of key: Name is: " + atomic.GetValue(myProfileAddress, "Name"));

            // Check if chain is valid.
            Console.WriteLine("Blockchain valid? " + (atomic.IsChainValid() ? "Yes" : "No"));


            // Start Socket Server.
            AsynchronousSocketListener.StartListening();

            return 0;
        }
    }
}