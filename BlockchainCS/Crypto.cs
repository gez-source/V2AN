using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using EllipticCurve;

namespace BlockchainCS.Crypto
{
    public class Common
    {
        public static byte[] StringEncode(string text)
        {
            return UTF8Encoding.UTF8.GetBytes(text);
        }
        public static string EncodeBase16(byte[] hash)
        {
            return BitConverter.ToString(hash).Replace("-", "").ToLower();
        }

        public static byte[] ToBytes(string hex)
        {
            return Enumerable.Range(0, hex.Length)
                             .Where(x => x % 2 == 0)
                             .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
                             .ToArray();
        }
    }

    public class Hash
    {
        public static string ComputeHash(string message)
        {
            byte[] hashBytes = SHA_256(Common.StringEncode(message));

            string hashResult = Common.EncodeBase16(hashBytes);

            return hashResult;
        }

        private static byte[] SHA_256(byte[] message)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                return sha256Hash.ComputeHash(message);
            }
        }
    }

    public class EllipticCurve
    {
        public class Converters
        {
            public static string KeyToBase62(PrivateKey privateKey)
            {
                byte[] der = privateKey.toDer();

                string keyBase62 = Base62.EncodingExtensions.ToBase62(der);

                return keyBase62;
            }

            public static string KeyToBase62(PublicKey publicKey)
            {
                byte[] der = publicKey.toDer();

                string keyBase62 = Base62.EncodingExtensions.ToBase62(der);

                return keyBase62;
            }

            public static PrivateKey Base62ToPrivateKey(string base62PrivateKey)
            {
                byte[] derBytes = Base62.EncodingExtensions.FromBase62(base62PrivateKey);

                return PrivateKey.fromDer(derBytes);
            }

            public static PublicKey Base62ToPublicKey(string base62PublicKey)
            {
                byte[] derBytes = Base62.EncodingExtensions.FromBase62(base62PublicKey);

                return PublicKey.fromDer(derBytes);
            }
        }

        public static PrivateKey GenerateKeys()
        {
            PrivateKey privateKey = new PrivateKey("secp256k1");
            return privateKey;
        }

        public static PrivateKey GenerateKeysFromPem(string pemString)
        {
            // Generate privateKey from PEM string

            //PrivateKey privateKey = PrivateKey.fromPem("-----BEGIN EC PARAMETERS-----\nBgUrgQQACg==\n-----END EC PARAMETERS-----\n-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIODvZuS34wFbt0X53+P5EnSj6tMjfVK01dD1dgDH02RzoAcGBSuBBAAK\noUQDQgAE/nvHu/SQQaos9TUljQsUuKI15Zr5SabPrbwtbfT/408rkVVzq8vAisbB\nRmpeRREXj5aog/Mq8RrdYy75W9q/Ig==\n-----END EC PRIVATE KEY-----\n");
            PrivateKey privateKey = PrivateKey.fromPem(pemString);

            return privateKey;
        }

        public static string Sign(string strHexPrivateKey, string message)
        {
            PrivateKey privateKey = Converters.Base62ToPrivateKey(strHexPrivateKey);

            return Sign(privateKey, message);
        }

        public static string Sign(PrivateKey privateKey, string message)
        {
            // Create message from json
            //string message = "{\n    \"transfers\": [\n        {\n            \"amount\": 100000000,\n            \"taxId\": \"594.739.480-42\",\n            \"name\": \"Daenerys Targaryen Stormborn\",\n            \"bankCode\": \"341\",\n            \"branchCode\": \"2201\",\n            \"accountNumber\": \"76543-8\",\n            \"tags\": [\"daenerys\", \"targaryen\", \"transfer-1-external-id\"]\n        }\n    ]\n}";

            // Generate Signature
            Signature signature = Ecdsa.sign(message, privateKey);

            // Generate Signature in base64. This result can be sent to Stark Bank in header as Digital-Signature parameter
            //Console.WriteLine("Signature: " + signature.toBase64());

            byte[] bytesDer = signature.toDer();

            string hexDer = Common.EncodeBase16(bytesDer);

            return hexDer;
        }

        public static bool Verify(string strHexPublicKey, string signature, string message)
        {
            PublicKey publicKey = Converters.Base62ToPublicKey(strHexPublicKey);

            return Verify(publicKey, signature, message);
        }

        public static bool Verify(PublicKey publicKey, string signature, string message)
        {
            byte[] bytesDer = Crypto.Common.ToBytes(signature);

            Signature sig = Signature.fromDer(bytesDer);

            return Verify(publicKey, sig, message);
        }

        public static bool Verify(PublicKey publicKey, Signature signature, string message)
        {
            return Ecdsa.verify(message, signature, publicKey);
        }
    }
}