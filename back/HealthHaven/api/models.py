from django.db import models

# Create your models here.
class PersonalData(models.Model):
    # image = models.ImageField(upload_to='images/') 
    full_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    blood_group = models.CharField(max_length=5)
    diagnosis = models.CharField(max_length=255)
    allergies = models.TextField(blank=True)
    contraindications = models.TextField(blank=True)
    guardian_contact = models.CharField(max_length=20)
    hospital = models.CharField(max_length=255)

    # def __str__(self):
    #     return self.full_name
    
    class Meta():
        verbose_name = "PersonalData"
        verbose_name_plural = "PersonalDataset"
    
    def __str__(self):
        return f"full_name: {self.full_name}, " \
           f"date_of_birth: {self.date_of_birth}, " \
           f"blood_group: {self.blood_group}, " \
           f"diagnosis: {self.diagnosis}, " \
           f"allergies: {self.allergies}, " \
           f"contraindications: {self.contraindications}, " \
           f"guardian_contact: {self.guardian_contact}, " \
           f"hospital: {self.hospital}"
    
    def to_json(self):
        return {
            "full_name": self.full_name,
            "date_of_birth": self.date_of_birth,
            "blood_group": self.blood_group,
            "diagnosis": self.diagnosis,
            "allergies": self.allergies,
            "contraindications": self.contraindications,
            "guardian_contact": self.guardian_contact,
            "hospital": self.hospital,
        }
    
