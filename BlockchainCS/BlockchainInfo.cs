using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlockchainCS
{
    public class BlockchainInfo
    {
        [JsonProperty("BlockHeight")]
        public long BlockHeight = -1;

        public static BlockchainInfo GetInfo()
        {
            BlockchainInfo info;
            string chainDir = "chain";
            string indexFile = chainDir + "\\index.dat";

            if (File.Exists(indexFile))
            {
                // Update index.dat file to show current block if new block is latest
                string indexJSON = File.ReadAllText(indexFile);

                info = JSON.FromJSON<BlockchainInfo>(indexJSON);
            }
            else
            {
                info = new BlockchainInfo();
                info.BlockHeight = 0;
            }

            return info;
        }

        public static void SaveInfo(BlockchainInfo info)
        {
            string chainDir = "chain";
            string indexFile = chainDir + "\\index.dat";

            string indexJSON = JSON.ToJSON(info);

            if (File.Exists(indexFile))
            {
                // File will be overwritten
                Console.WriteLine(indexFile + " is updated.");
            }
            File.WriteAllText(indexFile, indexJSON);
        }
    }
}
