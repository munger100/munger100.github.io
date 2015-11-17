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

            title = root.cssselect('h2')[0].text

            content_holder = root.cssselect('div.problem_content')[0]
            content = []
            for content_element in content_holder:
                content.append(content_element.text)
           
            print("Finished", problem)
            pages.append({"problem": problem, "title": title, "desc": content})
        f.write(json.dumps(pages))
        f.close()
        return pages


get_list()
