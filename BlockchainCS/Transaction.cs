using BlockchainCS.Crypto;
using EllipticCurve;
using Newtonsoft.Json;
using System;

namespace BlockchainCS
{
    public class Transaction
    {
        //[JsonProperty("TransactionHash")]
        //public string TransactionHash;

        [JsonProperty("BlockID")]
        public int BlockID;

        [JsonProperty("Age")]
        public string Age
        {
            get
            {
                long now = GetTimestamp();

                float seconds = ((float)(now - Timestamp)) / 1000.0f;
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

        [JsonProperty("FromAddress")]
        public string FromAddress;

        [JsonProperty("ToAddress")]
        public string ToAddress;

        [JsonProperty("Key")]
        public string Key;

        [JsonProperty("Value")]
        public string Value;

        [JsonProperty("Timestamp")]
        public long Timestamp;

        [JsonProperty("TransactionHash")]
        public string Signature;

        public Transaction()
        {

        }

        public override string ToString()
        {
            return "From: " + FromAddress + " To: " + ToAddress + " Key: " + Key + " Value: " + Value + " " + Timestamp;
        }

        public string ToHashableString()
        {
            return FromAddress + ToAddress + Key + Value + Timestamp.ToString() + Signature + BlockID.ToString();
        }

        public static long GetTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            return now.ToUnixTimeMilliseconds();
        }

        public string ComputeHash()
        {
            int mode = (int)Blockchain.BlockchainMode;

            string msg = mode.ToString() + this.FromAddress + this.ToAddress + this.Key + this.Value + this.Timestamp.ToString();

            string hashResult = Hash.ComputeHash(msg);

            return hashResult;
        }

        public void SignTransaction(string hexPrivateKey)
        {
            PrivateKey signingKey = Crypto.EllipticCurve.Converters.Base62ToPrivateKey(hexPrivateKey);

            SignTransaction(signingKey);
        }

        public void SignTransaction(PrivateKey signingKey)
        {
            string hexPublicKey = Crypto.EllipticCurve.Converters.KeyToBase62(signingKey.publicKey());
            if(hexPublicKey != this.FromAddress)
            {
                throw new Exception("You can not sign transactions for other profiles!");
            }

            string transactionHash = this.ComputeHash();

            this.Signature = Crypto.EllipticCurve.Sign(signingKey, transactionHash);
        }

        public bool IsValid()
        {
            if (string.IsNullOrEmpty(this.FromAddress)) return true; // Transaction might be a mining reward and so not have a from address.

            if (string.IsNullOrEmpty(this.Signature))
            {
                throw new Exception("No signature in this transaction");
            }

            PublicKey publicKey = Crypto.EllipticCurve.Converters.Base62ToPublicKey(this.FromAddress);
            
            string msg = this.ComputeHash();

            return Crypto.EllipticCurve.Verify(publicKey, this.Signature, msg);
        }
    }

}
