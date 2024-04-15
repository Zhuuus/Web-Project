from django.urls import path
from api.views.cbv import PersonalListApiView

urlpatterns = [
    path("personaldataset/", PersonalListApiView.as_view()),
]
