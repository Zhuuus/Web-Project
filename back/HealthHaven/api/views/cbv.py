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

class PersonalDataApiView(APIView):
    def get_object(self, id):
        try:
            perData = PersonalData.objects.get(id = id)
            return perData
        except PersonalData.DoesNotExist as e:
            return None
        
    def get(self, request, id):
        perData = self.get_object(id)

        if perData is None:
            return Response({"error": "PersonalData not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = PersonalDataSerializer(perData)
        return Response(serializer.data)
    
    def put(self, request, id):
        perData = self.get_object(id)

        if perData is None:
            return Response({"error": "PersonalData not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = PersonalDataSerializer(instance=perData, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request,id):
        perData = self.get_object(id)

        if perData is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        
        perData.delete()
        return Response({"deleted": True})
    