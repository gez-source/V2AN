using Newtonsoft.Json;
using System.IO;
using System.Text;

namespace BlockchainCS
{
    public class JSON
    {
        public static string ToJSON(object obj)
        {
            byte[] body;
            var serializer = new JsonSerializer();

            using (var ms = new MemoryStream())
            {
                using (var sw = new StreamWriter(ms, Encoding.UTF8))
                {
                    using (JsonWriter writer = new JsonTextWriter(sw))
                    {
                        serializer.Serialize(writer, obj);
                        sw.Flush();
                        body = ms.ToArray();
                    }
                }
            }

            return UTF8Encoding.UTF8.GetString(body);
        }
    }
}
