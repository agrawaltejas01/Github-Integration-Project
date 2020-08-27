import requests
import json
from datetime import datetime
# import dateutil.parser as dateParser


def syncIssues():

    done = False
    result = []
    page = 1

    while not done:
        response = requests.get(
            "https://api.github.com/repos/pallets/click/issues?state=all&per_page=100&page=" + str(page))

        page = page + 1
        if response.status_code != 200:
            done = True
            print("Error in API call")
            break

        response = response.json()

        if len(response) == 0:
            done = True
            break

        for issue in response:
            temp = {}
            temp["number"] = issue["number"]
            temp["state"] = issue["state"]
            temp["title"] = issue["title"]

            temp["label"] = []
            for label in issue["labels"]:
                temp[label].append(label["name"])

            # temp["label"] = issue["labels"]
            temp["body"] = issue["body"]
            temp["user"] = issue["user"]["login"]

            createdDate = datetime.strptime(
                issue["created_at"], '%Y-%m-%dT%H:%M:%SZ')
            temp["creationDate"] = createdDate

            result.append(temp)

    return result
