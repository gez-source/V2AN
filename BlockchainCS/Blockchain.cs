using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlockchainCS
{
    public enum BlockchainMode
    {
        MainNet = 0x77,
        TestNet = 0x00
    }

    public class Blockchain
    {
        public static int Difficulty = 1;
        public static string Problem = "effa0";
        public static int BlockHeight = 0;
        public static BlockchainMode BlockchainMode = BlockchainMode.TestNet;

        public List<Block> chain = new List<Block>();
        private Queue<Transaction> PendingTransactions = new Queue<Transaction>();

        public static Block CreateHeadBlock()
        {
            Block block = new Block();
            block.Timestamp = Block.GetTimestamp(DateTime.Parse("24/08/2021"));
            block.PreviousHash = string.Empty;
            block.Validator = "ATOMIC-chain-head";
            block.Hash = block.ComputeHash();
            
            return block;
        }

        public Block GetLatestBlock()
        {
            return chain.Last();
            //return this.chain[this.chain.Count() - 1];
        }

        public void VerifyPendingTransactions(string validatorAddress)
        {
            Block block = new Block();
            block.block = ++BlockHeight;
            block.Timestamp = Block.GetTimestamp();
            block.PreviousHash = this.GetLatestBlock().Hash;
            block.Transactions = new List<Transaction>(this.PendingTransactions);
            block.Validator = validatorAddress;

            for (int i=0;i< block.Transactions.Count();i++)
            {
                var txn = block.Transactions[i];
                txn.BlockID = block.block;
            }

            
            block.Hash = block.ComputeHash();

            block.VerifyBlock(Difficulty, Problem);

            if(block.VerifyProblem(Difficulty, Problem))
            {
                // Block sucessfully mined.
                // TODO: verify that hash meets problem requirements before adding to blockchain.

                PendingTransactions.Clear();

                // Add to the blockchain:
                this.chain.Add(block);

                // TODO: Notify or broadcast new block to other connected clients
            }
        }

        public void AddTransaction(Transaction transaction)
        {
            if (string.IsNullOrEmpty(transaction.FromAddress) || string.IsNullOrEmpty(transaction.ToAddress))
            {
                throw new Exception("Transaction must include from and to address");
            }

            // Verify the transactiion
            if (!transaction.IsValid())
            {
                throw new Exception("Cannot add invalid transaction to chain");
            }

            if (string.IsNullOrEmpty(transaction.Key))
            {
                throw new Exception("Transaction key should be specified");
            }

            if (string.IsNullOrEmpty(transaction.Value))
            {
                throw new Exception("Transaction value should be specified");
            }

            // TODO: Check that size of value is not greater than the max storage size


            this.PendingTransactions.Enqueue(transaction);

            Console.WriteLine("Transaction added. " + transaction.ToString());
        }

        public string GetValue(string profileAddress, string key)
        {
            string value = string.Empty;

            // TODO: Optimise using a database since chain can have a really large N*M.

            for(int i=0; i< this.chain.Count();i++)
            {
                Block block = this.chain[i];

                for(int j=0; j < block.Transactions.Count(); j++)
                {
                    Transaction transaction = block.Transactions[j];

                    if (transaction.FromAddress == profileAddress && transaction.Key == key)
                    {
                        // Take data away from profile holder.

                        // Nullify key and value in profile.
                        value = string.Empty;
                    }

                    if (transaction.ToAddress == profileAddress && transaction.Key == key)
                    {
                        // Give data to profile holder:

                        value = transaction.Value;
                    }
                }
            }

            return value;
        }

        public List<Block> GetLatestBlocks(string blockId)
        {
            List<Block> blocks;

            int blocki = -1;
            try
            {
                int.TryParse(blockId, out blocki);
            }
            catch(Exception ex)
            {

            }


            if(string.IsNullOrEmpty(blockId))
            {
                blocks = this.chain.OrderByDescending(item => item.block).Take(100).ToList();
            }
            else
            {
                blocks = this.chain.Where(item=> item.block == blocki).OrderByDescending(item => item.block).Take(100).ToList();
            }
            

            return blocks;
        }

        public List<Transaction> GetAllTransactionsForProfile(string profileAddress)
        {
            List<Transaction> transactions = new List<Transaction>();

            // TODO: Optimise using a database since chain can have a really large N*M.

            for (int i = 0; i < this.chain.Count(); i++)
            {
                Block block = this.chain[i];

                for (int j = 0; j < block.Transactions.Count(); j++)
                {
                    Transaction transaction = block.Transactions[j];

                    if (transaction.FromAddress == profileAddress || transaction.ToAddress == profileAddress)
                    {
                        transactions.Add(transaction);
                    }
                }
            }

            Console.WriteLine("Get transactions for profile count: " + transactions.Count());

            return transactions;
        }

        public Block GetBlockById(string blockId)
        {
            Block block;

            block = this.chain.Where(item => item.block.ToString() == blockId).Take(1).FirstOrDefault();

            return block;
        }

        public Transaction GetTransactionById(string txId)
        {
            Transaction txn = null;

            // TODO: Optimise using a database since chain can have a really large N*M.
            bool found = false;

            for (int i = 0; i < this.chain.Count() && !found; i++)
            {
                Block block = this.chain[i];

                for (int j = 0; j < block.Transactions.Count() && !found; j++)
                {
                    Transaction transaction = block.Transactions[j];

                    if(transaction.Signature == txId)
                    {
                        found = true;
                        txn = transaction;
                    }
                }
            }

            return txn;
        }

        public bool IsChainValid()
        {
            // TODO: Optimise by replacing with hash code comparision
            string realGenesis = CreateHeadBlock().ToHashableString();

            if (realGenesis != this.chain.First().ToHashableString())
            {
                Console.WriteLine("Chain head does not match local head");
                return false;
            }

            for (int i = 1; i < this.chain.Count(); i++)
            {
                Block currentBlock = this.chain[i];
                Block previousBlock = this.chain[i - 1];

                if (previousBlock.Hash != currentBlock.PreviousHash)
                {
                    return false;
                }

                if (!currentBlock.ValidateTransactions())
                {
                    return false;
                }

                if (currentBlock.Hash != currentBlock.ComputeHash())
                {
                    return false;
                }
            }

            return true;
        }
    }
}
