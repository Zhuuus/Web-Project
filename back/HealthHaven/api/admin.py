from django.contrib import admin
from .models import PersonalData, Post,User

# Register your models here.

# admin.site.register(User)
admin.site.register(PersonalData)
admin.site.register(Post)
admin.site.register(User)

