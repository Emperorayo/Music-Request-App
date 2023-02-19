from django.urls import path, include
from rest_framework import routers
from .views import SongRequestViewSet

router = routers.DefaultRouter()
router.register(r'song-requests', SongRequestViewSet, basename='songrequest')

urlpatterns = [
    path('', include(router.urls)),
    path('song-requests/<int:pk>/set-song-status/', SongRequestViewSet.as_view({'put': 'set_song_status'}), name='set-song-status'),
]
