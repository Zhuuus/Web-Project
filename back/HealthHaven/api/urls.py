from django.urls import path,include
from api.views.cbv import PersonalListApiView, PersonalDataApiView

urlpatterns = [
    path("personaldataset/", PersonalListApiView.as_view()),
    path("accounts/", include("django.contrib.auth.urls")),
    path("personaldataset/<int:id>/", PersonalDataApiView.as_view()),
]

