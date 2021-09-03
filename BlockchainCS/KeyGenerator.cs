using EllipticCurve;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlockchainCS
{
    public class KeyGenerator
    {
        public static void GenerateKeys()
        {
            PrivateKey privateKey = Crypto.EllipticCurve.GenerateKeys();
            PublicKey publicKey = privateKey.publicKey();

            string priv = Crypto.EllipticCurve.Converters.KeyToBase62(privateKey);
            string pub = Crypto.EllipticCurve.Converters.KeyToBase62(publicKey);

            Console.WriteLine("Public Key (also your profile address): " + pub);
            Console.WriteLine("");
            Console.WriteLine("Private Key (keep this secret used to sign transactions): " + priv);
        }
    }
}
