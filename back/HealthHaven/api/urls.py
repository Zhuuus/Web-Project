from django.urls import path, include
from api.views import PersonalListApiView, PersonalDetailAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views.cbv import SignupAPIView


urlpatterns = [
    path('signup/', SignupAPIView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/',TokenRefreshView.as_view()),
    path("personaldataset/", PersonalListApiView.as_view()),
    path("personaldataset/<int:id>/", PersonalDetailAPIView.as_view()),
]

