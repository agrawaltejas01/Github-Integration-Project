from django.shortcuts import render
from django.http import HttpResponse, Http404

from . import apiRequests as apiCall
from .mongoConnection import MongoConnection

# from rest_framework import


def syncIssues(request):

    response = apiCall.syncIssues()
    if response:

        mongo = MongoConnection()
        mongo.insertIssues(response)

        return HttpResponse("Hello World")
    
    else:
        return Http404

def getLabel(request):
     mongo = MongoConnection()
     result = mongo.getLabel("bug")
     
     return HttpResponse(result)

def getUser(request):
     mongo = MongoConnection()
     result = mongo.getUser("davidism")
     
     return HttpResponse(result)

def getDays(request):
     mongo = MongoConnection()
     result = mongo.getDays(55)
     
     return HttpResponse(result)