from django.urls import path, include
from ..api.views import PersonalListApiView, PersonalDetailAPIView
from ..api.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/',TokenRefreshView.as_view()),
    path("personaldataset/", PersonalListApiView.as_view()),
    path("personaldataset/<int:id>/", PersonalDetailAPIView.as_view()),
]

