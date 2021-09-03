using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlockchainCS
{
    public class BlockchainDB
    {
        public static Blockchain Atomic;

        public static Block[] GetLatestBlocks(string blockId)
        {
            return Atomic.GetLatestBlocks(blockId).ToArray();
        }

        public static Transaction[] GetTransactionsByProfileAddress(string profileAddress)
        {
            return Atomic.GetAllTransactionsForProfile(profileAddress).ToArray();
        }

        public static Block GetBlockById(string blockId)
        {
            return Atomic.GetBlockById(blockId);
        }

        public static Transaction GetTransactionById(string txId)
        {
            return Atomic.GetTransactionById(txId);
        }
    }
}
