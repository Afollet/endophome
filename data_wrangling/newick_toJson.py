from Bio import Phylo
import xml
import json
import xmljson
Phylo.convert("final_phyliptree.phy", "newick","final_rubi.xml", "phyloxml")
xml_file = open("final_rubi.xml", "r")
xml_string = xml_file.read()
xml_obj = xml.etree.ElementTree.fromstring(xml_string)
json = json.dumps(xmljson.parker.data(xml_obj))
with open("final_rubi.json", 'w') as out:
    out.write(json)

