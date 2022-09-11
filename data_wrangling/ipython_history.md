 1/1: import pandas as pd
 1/2: metablo=pd.read_csv("./rubiaceae_metabolome.tsv", sep='\t')
 1/3: metablo
 1/4: metablo.columns
 1/5: metablo.Species
 1/6: metablo.Species.unique
 1/7: metablo.Species.uniq()
 1/8: metablo.Species.unique()
 1/9: metablo.Species.unique().len
1/10: metablo.Species.unique().len()
1/11: len(metablo.Species.unique())
1/12: metablo.columns
1/13: metablo.Endophytic
1/14: metablo.Endophytic.unique()
1/15: len(metablo.Endophytic.unique())
1/16: metablo.Endophytic.unique()
1/17: metablo.drop_duplicates(subset=["Endophytic","Species"])
1/18: len(metablo.drop_duplicates(subset=["Endophytic","Species"]))
1/19: uniqMetablome = metablo.drop_duplicates(subset=["Endophytic","Species"])
1/20: uniqMetablome
1/21: uniqMetablome["Endophytic","Species"]
1/22: uniqMetablome[:, "Endophytic","Species"]
1/23: uniqMetablome.loc[:, "Endophytic","Species"]
1/24: uniqMetablome.loc[:, ["Endophytic","Species"]]
1/25: uniqMetablome.loc[:, "Endophytic","Species"].to_csv("species_by_endophyte.tsv",sep="\t",index=False)
1/26: uniqMetablome.loc[:, ["Endophytic","Species"]].to_csv("species_by_endophyte.tsv",sep="\t",index=False)
1/27: uniqMetablome.loc[:,"Species"].to_csv("species.tsv",sep="\t",index=False)
 2/1: import biopython
 3/1: import biopython
 3/2: import Bio
 3/3: from Bio import Phylo
 3/4: rubi=Phylo.read("phyliptree.phy", "newick")
 3/5: print(rubi)
 3/6: rubi=Phylo.read("phyliptree.phy", "newick")
 3/7: print(rubi)
 3/8: rubi.draw
 3/9: rubi.draw()
3/10: rubi.ladderize()
3/11: Phylo.draw(rubi)
3/12: rubi=Phylo.convert("phyliptree.phy", "newick","rubi.xml", "phyloxml")
3/13: ls
3/14: ils
3/15: ls
3/16: import json, xmljson
3/17: from lxml.etree
3/18: from lxml.etree import fromstring, tostring
3/19: rubi
3/20: import xml
3/21: xml_file = open("rubi.xml", "r")
3/22: xml_data = xml_file.read()
3/23: xml_data
3/24: print(xml_data)
3/25: json.dumps(xmljson.parker.data(xml_data))
3/26: file(xml_data)
3/27: type(xml_data)
3/28: import lxml
3/29: xml = lxml.etree.fromstring(xml_data)
3/30: xml = xml.etree.ElementTree.fromstring(xml_data)
3/31: json.dumps(xmljson.parker.data(xml))
3/32: json = json.dumps(xmljson.parker.data(xml))
3/33: json
3/34: json
3/35: dir(json)
3/36: json_out = open("phylo.json", 'w')
3/37: json_out.write(json)
3/38: json
3/39: json_out.write(json)
3/40: json_out.flush()
3/41: json_out.write(json)
3/42: json_out.flush()
3/43: json_out.close()
 4/1: import pandas as pd
 4/2: rubi = pd.read_csv("rubiaceae_metabolome.tsv", sep='\t')
 4/3: rubi
 4/4: rubi.iloc[:,0-5]
 4/5: rubi.iloc[:,0-5]
 4/6: rubi.iloc[:,0-6]
 4/7: rubi.iloc[:,0-7]
 4/8: rubi.iloc[:]
 4/9: rubi.iloc[:, 1-6]
4/10: rubi.iloc[:, 1]
4/11: rubi.iloc[:, 1-2]
4/12: rubi.iloc[:, 1-4]
4/13: rubi.iloc[:,[1-5]]
4/14: rubi.iloc[:,[1-4]]
4/15: rubi.iloc[:,[1-3]]
4/16: rubi.iloc[:,[1,3]]
4/17: rubi.iloc[:,[1,5]]
4/18: rubi.iloc[:,[1,4]]
4/19: rubi.iloc[:,[1,5]]
4/20: rubi.iloc[:,[1,4]]
4/21: rubi.iloc[:,[1,4]].to_json
4/22: rubi.iloc[:,[1,4]].to_json()
4/23: rubi.iloc[:,[1,4]].to_json('records’)
4/24: rubi.iloc[:,[1,4]].to_json('records')
4/25: print(rubi.iloc[:,[1,4]].to_json('records'))
4/26: print(rubi.iloc[:,[1,4]].to_json(orient ='records'))
4/27: print(rubi.iloc[:,[1,4]].to_json(orient ='records', force_ascii = False))
4/28: results = rubi.iloc[:,[1,4]].to_json(orient ='records', force_ascii = False)
4/29: import json
4/30: parsed = json.loads(result)
4/31: parsed = json.loads(results)
4/32: parsed
4/33: with open("dummy_metabolome", 'w') as out
4/34:
with open("dummy_metabolome", 'w') as out:
    out.write(parsed)
    out.flush()
    out.close()
4/35: parsed = json.dumps(results)
4/36:
with open("dummy_metabolome", 'w') as out:
    json.dump(results, out)
4/37: ls
4/38: cat dummy_metabolome
4/39:
with open("dummy_metabolome", 'w') as out:
    json.dump(results, out, force_ascii=False)
4/40:
with open("dummy_metabolome", 'w') as out:
    json.dump(results, out, endsure_ascii=False)
4/41:
with open("dummy_metabolome", 'w') as out:
    json.dump(results, out, ensure_ascii=False)
4/42: cat dummy_metabolome
4/43: results = rubi.iloc[:,[1,4]].to_json(orient ='records', force_ascii = False)
4/44:
with open("dummy_metabolome", 'w') as out:
    out.write(results)
4/45: cat results
4/46: cat dummy_metabolome
4/47: results = rubi.iloc[:,[1,4]].columns
4/48: rubi.iloc[:,[1,4]].columns
4/49: rubi.iloc[:,[1,5]].columns
4/50: rubi.iloc[:,[1-5]].columns
4/51: rubi.iloc[:,[1..5]].columns
4/52: rubi.iloc[:,[1:5]].columns
4/53: rubi.iloc[:,1:5].columns
4/54: rubi.iloc[:,1:6].columns
4/55: rubi.iloc[:,1:5].columns
4/56: rubi.iloc[:,1:5].columns
4/57: rubi.iloc[:,0:5].columns
4/58: print(rubi.iloc[:,0:6].columns)
4/59: print(rubi.iloc[:,0:5].columns)
4/60: results = rubi.iloc[:,0:5].to_json(orient ='records', force_ascii = False)
4/61:
with open("dummy_metabolome", 'w') as out:
    out.write(results)
4/62: results.columns
4/63: print(rubi.iloc[:,0:5].columns)
 5/1: rubi = pd.read_csv("rubiaceae_metabolome.tsv", sep='\t')
 5/2: pd.read_csv("rubiaceae_metabolome.tsv", sep='\t')
 5/3: import pandas as pd
 5/4: epd.read_csv("rubiaceae_metabolome.tsv", sep='\t').iloc[:, 0:5].columns
 5/5: pd.read_csv("rubiaceae_metabolome.tsv", sep='\t').iloc[:, 0:5].columns
 5/6: rubi = pd.read_csv("rubiaceae_metabolome.tsv", sep='\t').iloc[:, 0:5].reset_index(level=0)
 5/7: rubi = pd.read_csv("rubiaceae_metabolome.tsv", sep='\t').iloc[:, 0:5]
 5/8: rubi['id'] = rubi.index
 5/9: rubi.id
5/10: myJson = rubi.to_json(orient='records', force_ascii=False)
5/11:
with open("dummy_metabolome", 'w') as out:
    out.write(myJson)
5/12: cat myJ
5/13: cat myJson
5/14: cat dummy_metabolome
 6/1: import pandas as pd
 6/2: rbu = pd.read_csv("dummy_rubiacea.tsv", '\t')
 6/3: rub = pd.read_csv("dummy_rubiacea.tsv", '\t')
 6/4: rubi = pd.read_csv("dummy_rubiacea.tsv", sep='\t')
 6/5: ls
 6/6: ls
 6/7: rbui
 6/8: rubi
 6/9: rubi.columns
6/10: rubi['index'] = rubi.index
6/11: rubi_json = rubi.to_json(orient="records", force_ascii=False)
6/12: rubi_json
6/13:
with open("dummy_rubi", 'w') as out:
    out.write(rubi_json)
6/14: cat dummy_rubi
 7/1: rubi=Phylo.convert("phyliptree.phy", "newick","rubi.xml", "phyloxml")
 7/2: from Bio import Phylo
 7/3: rubi=Phylo.convert("final_phyliptree.phy", "newick","final_rubi.xml", "phyloxml")
 7/4: import xml
 7/5: history
 7/6: xml = xml.etree.ElementTree.fromstring(xml_data)
 7/7: xml = xml.etree.ElementTree.fromstring(rbui)
 7/8: xml = xml.etree.ElementTree.fromstring(rubi)
 7/9: type(rubi)
7/10: rubi
7/11: ls final_rubi.xml
7/12: cat final_rubi.xml
7/13: xml_file = open("final_rubi.xml", "r")
7/14: xml = xml.etree.ElementTree.fromstring(xml_file)
7/15: xml_string = xml_file.read()
7/16: type(xml_string)
7/17: xml = xml.etree.ElementTree.fromstring(xml_file)
7/18: xml = xml.etree.ElementTree.fromstring(xml_string)
7/19: type(xml)
7/20: json = json.dumps(xmljson.parker.data(xml))
7/21: import jason
7/22: import json
7/23: json = json.dumps(xmljson.parker.data(xml))
7/24: import xmljson
7/25: json = json.dumps(xmljson.parker.data(xml))
7/26:
with open("final_rubi", 'w') as out:
    out.write(json)
7/27: cat final_rubi
   1: %hist -o -g -f ipython_history.md
