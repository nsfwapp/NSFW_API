# Generated by Django 3.1.6 on 2021-02-04 11:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('performers', '0005_movies_scenes'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Movies',
            new_name='Movie',
        ),
        migrations.RenameModel(
            old_name='Scenes',
            new_name='Scene',
        ),
    ]
