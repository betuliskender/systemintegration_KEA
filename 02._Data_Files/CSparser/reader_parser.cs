using System;
using System.IO;
using System.Text;
using Newtonsoft.Json;
using YamlDotNet.RepresentationModel;
using CsvHelper;

class Program
{
    static void Main()
    {
        // Read and parse XML file
        string xmlContent = File.ReadAllText("../me.xml", Encoding.UTF8);
        Console.WriteLine("XML:");
        Console.WriteLine(xmlContent);

        // Read and parse JSON file
        string jsonContent = File.ReadAllText("../me.json", Encoding.UTF8);
        Console.WriteLine("\nJSON:");
        Console.WriteLine(jsonContent);

        // Read and parse YAML file
        string yamlContent = File.ReadAllText("../me.yaml", Encoding.UTF8);
        Console.WriteLine("\nYAML:");
        Console.WriteLine(yamlContent);

        // Read and parse CSV file
        string csvData = File.ReadAllText("../me.csv", Encoding.UTF8);
        string[] csvLines = csvData.Split(new[] { "\r\n", "\r", "\n" }, StringSplitOptions.None);
        string[][] csvContent = Array.ConvertAll(csvLines, line => line.Split(","));
        Console.WriteLine("\nCSV:");
        foreach (var row in csvContent)
        {
            Console.WriteLine(string.Join(", ", row));
        }

        // Read and parse text file
        string txtContent = File.ReadAllText("../me.txt", Encoding.UTF8);
        Console.WriteLine("\nTXT:");
        Console.WriteLine(txtContent);
    }
}
