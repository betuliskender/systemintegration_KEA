using System;
using System.IO;
using System.Text;
using Newtonsoft.Json;
using YamlDotNet.RepresentationModel;
using CsvHelper;
using System.Xml;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.VisualBasic.FileIO;

class Program
{
    static void PrintSeparator()
    {
        Console.WriteLine(new string('-', 50));
    }
    static void Main()
    {
        // Read and parse text file
        string txtContent = File.ReadAllText("../me.txt", Encoding.UTF8);
        Console.WriteLine("\nTXT:");
        Console.WriteLine(txtContent);
        PrintSeparator();

        // Read and parse XML file
        string xmlContent = File.ReadAllText("../me.xml", Encoding.UTF8);
        Console.WriteLine("XML:");

        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(xmlContent);

        XmlNodeList nodes = xmlDoc.DocumentElement.ChildNodes;
        foreach (XmlNode node in nodes)
        {
            if (node.NodeType == XmlNodeType.Element && node.HasChildNodes)
            {
                Console.Write($"{node.Name}: ");
                if (node.Name == "hobbies")
                {
                    var hobbies = node.ChildNodes.OfType<XmlNode>()
                        .Select(x => x.InnerText.Trim())
                        .ToList();
                    Console.WriteLine(string.Join(", ", hobbies));
                }
                else
                {
                    Console.WriteLine(node.InnerText);
                }
            }
        }
        PrintSeparator();


        // Read and parse YAML file
        string yamlContent = File.ReadAllText("../me.yaml", Encoding.UTF8);
        Console.WriteLine("\nYAML:");
        var input = new StringReader(yamlContent);
        var yaml = new YamlStream();
        yaml.Load(input);
        foreach (var doc in yaml.Documents)
        {
            foreach (var node in ((YamlMappingNode)doc.RootNode))
            {
                if (node.Key.ToString() == "hobbies")
                {
                    var hobbiesList = (YamlSequenceNode)node.Value;
                    Console.Write($"{node.Key}: ");
                    Console.WriteLine(string.Join(", ", hobbiesList.Children));
                }
                else
                {
                    Console.WriteLine($"{node.Key}: {node.Value}");
                }
            }
        }
        PrintSeparator();

        // Read and parse JSON file
        string jsonContent = File.ReadAllText("../me.json", Encoding.UTF8);
        Console.WriteLine("\nJSON:");
        JObject jsonObject = JObject.Parse(jsonContent);

        Console.WriteLine($"name: {jsonObject["name"]}");
        Console.WriteLine($"age: {jsonObject["age"]}");

        // Retrieve hobbies as JArray
        JArray hobbiesArray = (JArray)jsonObject["hobbies"];
        if (hobbiesArray != null)
        {
            string hobbies = string.Join(", ", hobbiesArray);
            Console.WriteLine($"hobbies: {hobbies}");
        }
        PrintSeparator();

        // Read and parse CSV file
        string csvPath = "../me.csv";

        using (TextFieldParser parser = new TextFieldParser(csvPath))
        {
            parser.TextFieldType = FieldType.Delimited;
            parser.SetDelimiters(",");
            parser.HasFieldsEnclosedInQuotes = true;
            parser.ReadLine();

            Console.WriteLine("\nCSV:");
            while (!parser.EndOfData)
            {
                string[] fields = parser.ReadFields();
                Console.WriteLine($"name: {fields[0]}\nage: {fields[1]}\nhobbies: {fields[2]}");
            }
        }
        PrintSeparator();
    }
}
