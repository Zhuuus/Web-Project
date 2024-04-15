from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import PersonalData
from api.serializers import PersonalDataSerializer

class PersonalListApiView(APIView):
    def get(self, request):
        PersonalDataset = PersonalData.objects.all()
        serializer = PersonalDataSerializer(PersonalDataset,many=True)

        return Response(serializer.data)
    
    def post(self, request):
        serializer = PersonalDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
