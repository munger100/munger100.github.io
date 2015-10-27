__author__ = 'Matthew'
import requests
import os

"""
    Gets all the html files that are the lists of problems and gets all the pages and problem descriptions
"""'''
with open("../projecteulersource/problems-list.txt", "w", encoding="utf8") as f:
    f.seek(0)  # This command clears the file
    f.truncate()  # This command clears the file
    for integer in range(1, 12):
        r = requests.get('https://projecteuler.net/archives;page=%s' % integer)
        f.write("\nPART %s\n" % integer)
        print("PART %s" % integer)
        f.write(r.text)
        '''
for integer in range(1, 522):
    filename = "../projecteulersource/problem%s.txt" % integer
    if os.path.isfile(filename):
        print("File %s exists, no need to create it for problem %s" % (filename, integer))
    else:
        print("File %s does not exist, need to create it for problem %s" % (filename, integer))
        with open(filename, "w", encoding="utf8") as f:
            r = requests.get("https://projecteuler.net/problem=%s" % integer)
            f.write(r.text)
