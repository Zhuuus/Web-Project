from rest_framework import serializers
from .models import PersonalData
from .models import Post

class PersonalDataSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    image = serializers.ImageField()
    name = serializers.CharField()
    surename = serializers.CharField()
    email = serializers.EmailField()
    date_of_birth = serializers.CharField()
    blood_group = serializers.CharField()
    diagnosis = serializers.CharField()
    allergies = serializers.CharField()
    contraindications = serializers.CharField()
    guardian_contact = serializers.CharField()
    hospital = serializers.CharField()

    def create(self, validated_data):
        instance = PersonalData.objects.create(
            image = validated_data.get("image"),
            name = validated_data.get("name"),
            surename = validated_data.get("surename"),
            email = validated_data.get("email"),
            date_of_birth = validated_data.get("date_of_birth"),
            blood_group = validated_data.get("blood_group"),
            diagnosis = validated_data.get("diagnosis"),
            allergies = validated_data.get("allergies"),
            contraindications = validated_data.get("contraindications"),
            guardian_contact = validated_data.get("guardian_contact"),
            hospital = validated_data.get("hospital")
        )
        return instance

    def update(self, instance, validate_data):
        instance.image = validate_data.get("image")
        instance.name = validate_data.get("name")
        instance.surename = validate_data.get("surename")
        instance.email = validate_data.get("email")
        instance.date_of_birth = validate_data.get("date_of_birth")
        instance.blood_group = validate_data.get("blood_group")
        instance.diagnosis = validate_data.get("diagnosis")
        instance.allergies = validate_data.get("allergies")
        instance.contraindications = validate_data.get("contraindications")
        instance.guardian_contact = validate_data.get("guardian_contact")
        instance.hospital = validate_data.get("hospital")

        instance.save()
        return instance


class PersonalDataSerializer2(serializers.ModelSerializer):
    name = serializers.CharField(max_length = 70)
    user_id = serializers.IntegerField(read_only=True)
    email = serializers.EmailField()

    class Meta:
        model = PersonalData
        fields = ("id","full_name","user_id", "email")

class PostSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length = 255)
    author = serializers.CharField(max_length = 70, read_only = True)
    user_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Post
        fields = ("id","title","user_id", "author")
