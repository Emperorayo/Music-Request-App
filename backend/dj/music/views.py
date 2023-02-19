from rest_framework import viewsets
from rest_framework.response import Response
from .models import SongRequest
from .serializers import SongRequestSerializer
from rest_framework import status
from rest_framework.decorators import action

class SongRequestViewSet(viewsets.ModelViewSet):
    queryset = SongRequest.objects.all()
    serializer_class = SongRequestSerializer
    
    def destroy(self,request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def perform_destroy(self,instance):
        instance.delete()
        
  
    @action(detail=True, methods=['PUT'])
    def set_song_status(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        


