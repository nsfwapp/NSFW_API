# Generated by Django 3.1.6 on 2021-02-06 09:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('performers', '0009_auto_20210206_1029'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorite_movies', to='performers.movie')),
                ('performer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorite_performers', to='performers.performer')),
                ('scene', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorite_scenes', to='performers.scene')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
