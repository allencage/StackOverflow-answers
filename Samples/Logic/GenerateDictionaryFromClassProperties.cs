using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class MyClass
	{
		public int Id { get; set; }
		public string MyFirstString { get; set; }
	}

	public class MySecondClass
	{
		public int Id { get; set; }
		public string MyFirstString { get; set; }
		public string MySecondString { get; set; }
	}

	public class GenerateDictionaryFromClassProperties
	{
		private static Dictionary<string, string> SetReflectionPayload(object obj)
		{
		    return obj.GetType()
		        .GetProperties()
		        .ToDictionary(info => info.Name, info => (info.GetGetMethod().Invoke(obj, null) == null
		            ? ""
		            : info.GetGetMethod().Invoke(obj, null).ToString()));
		}
	}
}
