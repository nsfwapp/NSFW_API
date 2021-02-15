# Generated by Django 3.1.6 on 2021-02-15 04:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('performers', '0012_auto_20210213_1110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scene',
            name='performers',
            field=models.ManyToManyField(related_name='scene_performers', through='performers.SceneCastTable', to='performers.Performer'),
        ),
        migrations.CreateModel(
            name='SceneTagsTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scene', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.scene')),
                ('tag', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.tags')),
            ],
            options={
                'db_table': 'scene_tags_table',
            },
        ),
        migrations.CreateModel(
            name='MovieTagsTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.movie')),
                ('tag', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.tags')),
            ],
            options={
                'db_table': 'movie_tags_table',
            },
        ),
        migrations.CreateModel(
            name='MovieGenresTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.genres')),
                ('movie', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.movie')),
            ],
            options={
                'db_table': 'movie_genres_table',
            },
        ),
        migrations.CreateModel(
            name='MovieCastTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.movie')),
                ('performer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='performers.performer')),
            ],
            options={
                'db_table': 'movie_cast_table',
            },
        ),
        migrations.AlterField(
            model_name='movie',
            name='genres',
            field=models.ManyToManyField(related_name='genres', through='performers.MovieGenresTable', to='performers.Genres'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='performers',
            field=models.ManyToManyField(related_name='movie_performers', through='performers.MovieCastTable', to='performers.Performer'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='tags',
            field=models.ManyToManyField(related_name='movie_tags', through='performers.MovieTagsTable', to='performers.Tags'),
        ),
        migrations.AlterField(
            model_name='scene',
            name='tags',
            field=models.ManyToManyField(related_name='scene_tags', through='performers.SceneTagsTable', to='performers.Tags'),
        ),
    ]
