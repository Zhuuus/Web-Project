# Generated by Django 5.0.3 on 2024-05-03 05:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_post_author_profile_delete_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Profile',
        ),
    ]
