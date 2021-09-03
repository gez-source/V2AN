using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlockchainCS
{
    public class Block
    {
        [JsonProperty("Block")]
        public int block;

        [JsonProperty("Age")]
        public string Age
        {
            get
            {
                long now = GetTimestamp();

                float seconds =  ((float)(now - Timestamp)) / 1000.0f;
                float minutes = seconds / 60.0f;
                float hours = minutes / 60.0f;
                float days = hours / 24.0f;
                float weeks = days / 7.0f;
                float months = weeks / 4.0f;
                float years = months / 12.0f;

                string type = "";

                if (seconds < 2)
                {
                    type = ((int)(seconds)).ToString() + " sec ago";
                }
                else if (seconds < 60)
                {
                    type = ((int)(seconds)).ToString() + " secs ago";
                }
                else if (minutes < 2)
                {
                    type = ((int)(minutes)).ToString() + " min ago";
                }
                else if (minutes < 60)
                {
                    type = ((int)(minutes)).ToString() + " mins ago";
                }
                else if (hours < 2)
                {
                    type = ((int)(hours)).ToString() + " hour ago";
                }
                else if (hours < 24)
                {
                    type = ((int)(hours)).ToString() + " hours ago";
                }
                else if (days < 2)
                {
                    type = ((int)(days)).ToString() + " day ago";
                }
                else if (days < 7)
                {
                    type = ((int)(days)).ToString() + " days ago";
                }
                else if (weeks < 2)
                {
                    type = ((int)(weeks)).ToString() + " week ago";
                }
                else if (weeks < 4)
                {
                    type = ((int)(weeks)).ToString() + " weeks ago";
                }
                else if (months < 2)
                {
                    type = ((int)(months)).ToString() + " month ago";
                }
                else if (months < 12)
                {
                    type = ((int)(months)).ToString() + " months ago";
                }
                else if (years < 2)
                {
                    type = ((int)(years)).ToString() + " year ago";
                }
                else
                {
                    type = ((int)(years)).ToString() + " years ago";
                }

                return type;
            }
        }

        [JsonProperty("Txn")]
        public string Txn
        {
            get
            {
                return Transactions.Count().ToString();
            }
        }

        [JsonProperty("Validator")]
        public string Validator;


        public List<Transaction> Transactions = new List<Transaction>();
        public long Timestamp;
        public long Nonce = 0;
        public string Hash;
        public string PreviousHash;

        public string ToHashableString()
        {
            int mode = (int)Blockchain.BlockchainMode;

            string txData = "";
            foreach (var tx in this.Transactions)
            {
                txData += tx.ToHashableString();
            }

            return txData + PreviousHash + Timestamp + Nonce.ToString() + mode.ToString();
        }

        public string ComputeHash()
        {
            string msg = ToHashableString();
            string hashResult = Crypto.Hash.ComputeHash(msg);

            return hashResult;
        }

        public static long GetTimestamp(DateTime date)
        {
            return ((DateTimeOffset)date).ToUnixTimeMilliseconds();
        }

        public static long GetTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            return now.ToUnixTimeMilliseconds();
        }

        public bool ValidateTransactions()
        {
            for (int i = 0; i < this.Transactions.Count(); i++)
            {
                Transaction tx = Transactions[i];

                if (!tx.IsValid())
                {
                    return false;
                }
            }

            return true;
        }

        public string GenerateChallenge(int difficulty, string problem)
        {
            string solution = string.Empty; // Solution to problem.
            for(int d= 0; d < difficulty; d++)
            {
                solution += problem;
            }
            return solution;
        }

        public void VerifyBlock(int difficulty, string problem = "0")
        {
            Console.WriteLine("Verifying block...");

            while (!VerifyProblem(difficulty, problem))
            {
                this.Nonce++; // Increment a nonce or generate a random value.
                this.Hash = this.ComputeHash();
            }

            Console.WriteLine("Block successfully verified: " + this.Hash + " problem: " + problem + " " + difficulty.ToString());
        }

        public bool VerifyProblem(int difficulty, string problem)
        {
            if(string.IsNullOrEmpty(this.Hash))
            {
                return false;
            }

            string solution = GenerateChallenge(difficulty, problem);

            string sample = this.Hash.Substring(0, problem.Length * difficulty);

            return (sample == solution);
        }
    }
}