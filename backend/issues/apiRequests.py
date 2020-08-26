import requests
import json
from datetime import datetime
# import dateutil.parser as dateParser


def syncIssues():

    response = requests.get(
        "https://api.github.com/repos/pallets/click/issues")

    if response.status_code != 200:
        return []

    response = response.json()

    result = []
    for issue in response:
        temp = {}
        temp["number"] = issue["number"]
        temp["state"] = issue["state"]
        temp["title"] = issue["title"]
        temp["label"] = issue["labels"]
        temp["body"] = issue["body"]
        temp["user"] = issue["user"]["login"]

        createdDate = datetime.strptime(issue["created_at"], '%Y-%m-%dT%H:%M:%SZ')
        temp["creationDate"] = createdDate

        result.append(temp)

    return result
