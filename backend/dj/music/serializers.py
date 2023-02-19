from rest_framework import serializers
from .models import SongRequest


class SongRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model =SongRequest
        fields = '__all__'
        