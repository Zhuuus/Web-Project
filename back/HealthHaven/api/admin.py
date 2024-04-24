from django.contrib import admin
from .models import PersonalData

# Register your models here.

@admin.register(PersonalData)
class PersonalDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user')
    search_fields = ('name',)