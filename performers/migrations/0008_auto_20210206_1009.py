# Generated by Django 3.1.6 on 2021-02-06 04:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('performers', '0007_auto_20210205_1629'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tags',
            old_name='tag',
            new_name='tag_name',
        ),
    ]
