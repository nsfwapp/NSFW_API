from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model

# Create your models here.


class Ratings(models.Model):
    rating = models.DecimalField(unique=True, max_digits=10, decimal_places=1, blank=True, null=True)

    class Meta:

        db_table = 'ratings'

class Studios(models.Model):
    studio = models.CharField(unique=True, max_length=80, blank=True, null=True)
    parent_studio = models.CharField(max_length=80, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'studios'

class Releasedates(models.Model):
    relesse_date = models.DateField(unique=True, blank=True, null=True)

    class Meta:
        db_table = 'releasedates'

class Tags(models.Model):
    tag_name = models.CharField(unique=True, max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'tags'

class Genres(models.Model):
    genre_name = models.CharField(max_length=80, blank=True, null=True)

    class Meta:
        db_table = 'genres'

class Directors(models.Model):
    name = models.CharField(unique=True, max_length=80, blank=True, null=True)

    class Meta:
        db_table = 'directors'



class Performer(models.Model):
    name = models.CharField(max_length=150)
    aliases = models.TextField(blank=True, null=True)
    gender = models.TextField(blank=True, null=True)  # This field type is a guess.
    description = models.TextField(blank=True, null=True)
    profile_pic = models.URLField(models.CharField(null=True), null=True)  
    date_of_birth = models.DateField(blank=True, null=True)
    years_active = models.CharField(max_length=50, blank=True, null=True)
    ethnicity = models.CharField(max_length=50, blank=True, null=True)
    birth_place = models.CharField(max_length=300, blank=True, null=True)
    height = models.CharField(max_length=50, blank=True, null=True)
    hair_color = models.CharField(max_length=50, blank=True, null=True)
    eye_color = models.CharField(max_length=50, blank=True, null=True)
    boobs = models.CharField(max_length=50, blank=True, null=True)
    tattoos = models.CharField(max_length=50, blank=True, null=True)
    piercings = models.CharField(max_length=50, blank=True, null=True)
    measurments = models.CharField(max_length=50, blank=True, null=True)
    rating = models.ForeignKey('Ratings', models.DO_NOTHING, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'performers'


class Movie(models.Model):
    movie_title = models.CharField(max_length=150, blank=True, null=True)
    movie_cover = models.URLField(blank=True, null=True)  
    length = models.TimeField(blank=True, null=True)
    movie_trailer = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    gallary_urls = ArrayField(ArrayField(models.CharField(max_length=10, blank=True),size=8),size=8)  
    studio = models.ForeignKey(Studios, models.DO_NOTHING, blank=True, null=True)
    director = models.ForeignKey(Directors, models.DO_NOTHING, blank=True, null=True)
    release_date = models.ForeignKey(Releasedates, models.DO_NOTHING, blank=True, null=True)
    rating = models.ForeignKey(Ratings, models.DO_NOTHING, blank=True, null=True)

    performers = models.ManyToManyField(Performer)
    tags = models.ManyToManyField(Tags)
    genres = models.ManyToManyField(Genres)

    class Meta:
        db_table = 'movies'

class Scene(models.Model):
    title = models.CharField(max_length=150, blank=True, null=True)
    thumbnail_url = models.URLField( blank=True, null=True)
    preview_url = models.URLField(blank=True, null=True)
    length = models.TimeField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    gallary_urls = ArrayField(ArrayField(models.CharField(max_length=10, blank=True),size=8),size=8) 
    studio = models.ForeignKey(Studios, models.DO_NOTHING, blank=True, null=True)
    director = models.ForeignKey(Directors, models.DO_NOTHING, blank=True, null=True)
    release_date = models.ForeignKey(Releasedates, models.DO_NOTHING, blank=True, null=True)
    rating = models.ForeignKey(Ratings, models.DO_NOTHING, blank=True, null=True)
    movie = models.ForeignKey(Movie, models.DO_NOTHING, blank=True, null=True)

    performers = models.ManyToManyField(Performer)
    tags = models.ManyToManyField(Tags)

    class Meta:
        db_table = 'scenes'


class FavoriteScene(models.Model):
    user = models.ForeignKey(get_user_model(), null=True, on_delete=models.CASCADE)

    scene = models.ForeignKey(Scene, related_name='favorite_scenes', on_delete=models.CASCADE)

class FavoriteMovie(models.Model):
    user = models.ForeignKey(get_user_model(), null=True, on_delete=models.CASCADE)

    movie = models.ForeignKey(Movie, related_name='favorite_movies', on_delete=models.CASCADE)

class FavoritePerformer(models.Model):
    user = models.ForeignKey(get_user_model(), null=True, on_delete=models.CASCADE)

    performer = models.ForeignKey(Performer, related_name='favorite_performers', on_delete=models.CASCADE)

