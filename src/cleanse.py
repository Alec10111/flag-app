# -*- coding: utf-8 -*-
"""
Created on Thu Oct 14 11:55:07 2021

@author: Alec
"""
countryCodes = []
countryCntCodes = []

with open("file_iso_continent.csv","r") as f:
    content = f.readlines()
    for line in content[1:]:
        columns = line.strip().split(",")
        #countryCodes.append([columns[-3],columns[2][0:],columns[1]])
        if(columns[2][0]=='"'):
            countryCodes.append([columns[-3],columns[2][1:]])
        else:
           countryCodes.append([columns[-3],columns[2]]) 
        #countryCntCodes.append([columns[-3],columns[1]])

        #continentCodes.append((columns[0],columns[1]))
        
        #if(len(columns)==6):
           #countryCodes.append([columns[3],columns[2],columns[1]])
       # else:
            #countryCodes.append([columns[-3],(" ").join(columns[2:-2]),columns[1]])
            #countryCodes.append([columns[-3],columns[2],columns[1]])
            
            
        #print(f"Code: {columns[1]},   Country: {columns[0]}")
        #print(columns)
        
#continentCodes = list(set(continentCodes))
#print(continentCodes)
print(countryCodes)
#print(countryCntCodes)
