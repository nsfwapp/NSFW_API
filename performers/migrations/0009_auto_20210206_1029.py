# Generated by Django 3.1.6 on 2021-02-06 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('performers', '0008_auto_20210206_1009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='performer',
            name='profile_pic',
            field=models.URLField(null=True, verbose_name=models.CharField(null=True)),
        ),
    ]
