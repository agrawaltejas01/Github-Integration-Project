from rest_framework import serializers

class issueSerializer(serializers.Serializer):
    number = serializers.IntegerField()
    state = serializers.CharField(max_length=10)
    title = serializers.CharField(max_length=255)
    label = serializers.JSONField()
    body = serializers.CharField(max_length=None)
    user = serializers.CharField(max_length=50)
    creationDate = serializers.DateTimeField()