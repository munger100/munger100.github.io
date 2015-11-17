import json

__author__ = 'Matthew'
import lxml
import lxml.html
import requests

"""
    Gets all the html files that are the lists of problems and gets all the pages and problem descriptions
"""


def get_list():
    with open("../problems-list.json", "w", encoding="utf8") as f:
        pages = []
        f.seek(0)  # This command clears the file
        f.truncate()  # This command clears the file
        problem_amount = 521
        for problem in range(1, problem_amount + 1):
            r_problem = requests.get('https://projecteuler.net/problem=%s' % problem)
            html = r_problem.text
            root = lxml.html.fromstring(html)

            h2 = root.cssselect('[element=h2]')
            print(h2)
            break
            pages.append({"problem": problem, "html": r_problem.text})
        f.write(json.dumps(pages))
        f.close()
        return pages


get_list()
