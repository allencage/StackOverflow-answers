using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public interface IInter
    {
    }

	public class MyClass : IInter
	{
		public int Id { get; set; }
		public string MyFirstString { get; set; }
	}

	public class MySecondClass : IInter
	{
		public int Id { get; set; }
		public string MyFirstString { get; set; }
		public string MySecondString { get; set; }
	}

	public class GenerateDictionaryFromClassProperties
	{
		private static Dictionary<string, string> SetReflectionPayload(IInter obj)
		{
			Dictionary<string, string> dict = 
				(from x in obj.GetType().GetProperties() select x)
				.ToDictionary(x => 
				x.Name, x => (x.GetGetMethod().Invoke(obj, null) == null
						? ""
						: x.GetGetMethod().Invoke(obj, null).ToString()));
			return dict;
		}
	}
}
