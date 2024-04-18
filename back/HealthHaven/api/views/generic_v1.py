# from rest_framework import mixins, generics

# from api.models import PersonalData
# from api.serializers import PersonalDataSerializer2


# class PersonalListAPIView(mixins.ListModelMixin,
#                           mixins.CreateModelMixin,
#                           generics.GenericAPIView):
#     queryset = PersonalData.objects.all()
#     serializer_class = PersonalDataSerializer2

#     def get(self, request):
#         return self.list(request)

#     def post(self, request):
#         return self.create(request)


# class PersonalDetailAPIView(mixins.RetrieveModelMixin,
#                             mixins.UpdateModelMixin,
#                             mixins.DestroyModelMixin,
#                             generics.GenericAPIView):
#     queryset = PersonalData.objects.all()
#     serializer_class = PersonalDataSerializer2

#     def get(self, request, pk=None):
#         return self.retrieve(request, pk)

#     def put(self, request, pk=None):
#         return self.update(request, pk)

#     def delete(self, request, pk=None):
#         return self.destroy(request, pk)