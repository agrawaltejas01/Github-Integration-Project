from django.shortcuts import render
from django.http import HttpResponse, Http404

from . import apiRequests as apiCall
from .mongoConnection import MongoConnection

from rest_framework.views import APIView
from rest_framework.decorators import api_view

from rest_framework.response import Response
from .serializers import issueSerializer


@api_view(['GET'])
def syncIssues(request):

    response = apiCall.syncIssues()
    if response:

        mongo = MongoConnection()
        inserted = mongo.insertIssues(response)

        if inserted:
            return Response("true")

        else:
            return Response("false")
    else:
        return Response("false")

@api_view(['GET'])
def getLabel(request, label):
    mongo = MongoConnection()
    result = mongo.getLabel(label)

    response = issueSerializer(result, many=True).data
    return Response(response)
    #  return HttpResponse(result)


@api_view(['GET'])
def getUser(request, userName):
    mongo = MongoConnection()
    result = mongo.getUser(userName)

    response = issueSerializer(result, many=True).data
    return Response(response)


@api_view(['GET'])
def getDays(request, days):
    mongo = MongoConnection()
    result = mongo.getDays(days)

    response = issueSerializer(result, many=True).data
    return Response(response)
