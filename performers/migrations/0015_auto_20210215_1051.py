# Generated by Django 3.1.6 on 2021-02-15 05:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('performers', '0014_auto_20210215_1046'),
    ]

    operations = [
        migrations.RenameField(
            model_name='performer',
            old_name='rating',
            new_name='performer_rating',
        ),
    ]
