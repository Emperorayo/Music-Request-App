from django.db import models
from django.utils import timezone


class SongRequest(models.Model):
    name: models.CharField(max_length = 100)
    email = models.EmailField()
    song = models.CharField(max_length = 250)
    requested_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.song
       
