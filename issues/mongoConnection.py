from pymongo import MongoClient
from datetime import datetime, timedelta

class MongoConnection(object):
    
    def __init__(self):
        client = MongoClient('localhost', 27017)
        self.db = client['github-issue']
        self.issue = self.db['issues']

    # def getIssuesForDays(days):
    #     self.collection.find(
    #         {

    #         }
    #     )

    def insertIssues(self, issues):
        result = self.issue.insert_many(issues)

        if not result:
            return False
        
        return True
    
    def getLabel(self, label):

        query = {
            "label.name" : label
        }

        labeldIssues = self.issue.find(query)
        return labeldIssues
    
    def getUser(self, userName):

        query = {
            "user" : userName
        }

        userIssues = self.issue.find(query)
        return userIssues
    
    def getDays(self, days):

        requiredDate = datetime.now() - timedelta(days=days + 1)
        # requiredDate = requiredDate - timedelta(days=1)
        print(requiredDate)

        query = {
        "creationDate" : {
            "$gte": requiredDate
        }
    }

        userIssues = self.issue.find(query)
        return userIssues