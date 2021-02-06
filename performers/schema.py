import graphene 
from graphene_django import DjangoObjectType
from .models import Performer, Movie, Scene, Studios, Tags, FavoriteScene, FavoriteMovie, FavoritePerformer
from users.schema import UserType
from graphql import GraphQLError

#Types
class PerformerType(DjangoObjectType):
    class Meta:
            model = Performer

class SceneType(DjangoObjectType):
    class Meta:
            model = Scene

class MovieType(DjangoObjectType):
    class Meta:
            model = Movie

class StudioType(DjangoObjectType):
    class Meta:
            model = Studios

class TagsType(DjangoObjectType):
    class Meta:
            model = Tags

class FavoriteSceneType(DjangoObjectType):
    class Meta:
            model = FavoriteScene

class FavoriteMovieType(DjangoObjectType):
    class Meta:
            model = FavoriteMovie

class FavoritePerformerType(DjangoObjectType):
    class Meta:
            model = FavoritePerformer



#Query for each one
class Query(graphene.ObjectType):
    performers = graphene.List(PerformerType, search=graphene.String())
    scenes = graphene.List(SceneType)
    movies = graphene.List(MovieType)
    studios = graphene.List(StudioType)
    tags = graphene.List(TagsType)
    favorite_scenes = graphene.List(FavoriteSceneType)
    favorite_movies = graphene.List(FavoriteMovieType)
    favorite_performers = graphene.List(FavoritePerformerType)

    def resolve_performers(self, info, search=None):
        if search:
            return Performer.objects.filter(name__icontains=search)

        return Performer.objects.all()

    def resolve_scenes(self, info):
        return Scene.objects.all()

    def resolve_movies(self, info):
        return Movie.objects.all()

    def resolve_studios(self, info):
        return Studios.objects.all()

    def resolve_tags(self, info):
        return Tags.objects.all()

    def resolve_favorite_scenes(self, info):
        return FavoriteScene.objects.all()

    def resolve_favorite_movies(self, info):
        return FavoriteMovie.objects.all()

    def resolve_favorite_performers(self, info):
        return FavoritePerformer.objects.all()

#Create Mutation
class CreatePerformer(graphene.Mutation):
    performer = graphene.Field(PerformerType)

    class Arguments:
        performer_id = graphene.Int(required=True)
        name = graphene.String(required=True)
        description = graphene.String()
        gender = graphene.String()
        profile_pic = graphene.String()
        date_of_birth = graphene.Date()
        years_active = graphene.String()
        ethnicity = graphene.String()
        birth_Place = graphene.String()
        height = graphene.String()
        hair_color = graphene.String()
        eye_color = graphene.String()
        boobs = graphene.String()
        tattoos = graphene.String()
        piercings = graphene.String()
        measurments = graphene.String()
        rating = graphene.Float()

    def mutate(self, info, **kwargs):
        performer = Performer(**kwargs)
        performer.save()
        return CreatePerformer(performer)


class CreateTag(graphene.Mutation):
    tag = graphene.Field(TagsType)

    class Arguments:
        tag_name = graphene.String(required=True)

    def mutate(self, info, tag_name):
        tag = Tags(tag_name=tag)
        tag.save()
        return CreateTag(tag)

class CreateSceneFavorite(graphene.Mutation):
    user = graphene.Field(UserType)
    scene = graphene.Field(SceneType)

    class Arguments:
        scene_id = graphene.Int(required=True)

    def mutate(self, info, scene_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError(f"login to favorite scene")

        scene = Scene.objects.get(id=scene_id)
        if not scene:
            raise GraphQLError(f"Cannot find Scene with id: {scene_id}")

        FavoriteScene.objects.create(user=user, scene=scene)

        return CreateSceneFavorite(user=user, performer=scene)

class CreateMovieFavorite(graphene.Mutation):
    user = graphene.Field(UserType)
    movie = graphene.Field(MovieType)

    class Arguments:
        movie_id = graphene.Int(required=True)

    def mutate(self, info, movie_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError(f"login to favorite Movie")

        movie = Movie.objects.get(id=movie_id)
        if not movie:
            raise GraphQLError(f"Cannot find Movie with id: {movie_id}")

        FavoriteMovie.objects.create(user=user, movie=movie)

        return CreateMovieFavorite(user=user, movie=movie)

class CreatePerformerFavorite(graphene.Mutation):
    user = graphene.Field(UserType)
    performer = graphene.Field(PerformerType)

    class Arguments:
        performer_id = graphene.Int(required=True)

    def mutate(self, info, performer_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError(f"login to favorite Performer")

        performer = Performer.objects.get(id=performer_id)
        if not performer:
            raise GraphQLError(f"Cannot find Performer with id: {performer_id}")

        FavoritePerformer.objects.create(user=user, performer=performer)

        return CreatePerformerFavorite(user=user, performer=performer)



#Edit Mutation
class EditPerformer(graphene.Mutation):
    performer = graphene.Field(PerformerType)

    class Arguments:
        performer_id = graphene.Int(required=True)
        name = graphene.String(required=True)
        description = graphene.String()
        gender = graphene.String()
        profile_pic = graphene.String()
        date_of_birth = graphene.Date()
        years_active = graphene.String()
        ethnicity = graphene.String()
        birth_Place = graphene.String()
        height = graphene.String()
        hair_color = graphene.String()
        eye_color = graphene.String()
        boobs = graphene.String()
        tattoos = graphene.String()
        piercings = graphene.String()
        measurments = graphene.String()
        rating = graphene.Float()

    def mutate(self, info, performer_id, name, description, gender, profile_pic, date_of_birth, years_active, ethnicity, birth_Place, height, hair_color, 
                eye_color, boobs, tattoos, piercings, measurments, rating):
       
        performer = Performer.objects.get(id=performer_id)

        performer.id = performer_id
        performer.name = name
        performer.gender = gender
        performer.description = description
        performer.profile_pic = profile_pic
        performer.date_of_birth = date_of_birth
        performer.years_active = years_active
        performer.ethnicity = ethnicity
        performer.birth_Place = birth_Place
        performer.height = height
        performer.hair_color = hair_color
        performer.eye_color = eye_color
        performer.boobs = boobs
        performer.tattoos = tattoos
        performer.piercings = piercings
        performer.measurments = measurments
        performer.rating = rating

        performer.save()

        return EditPerformer(performer)

class EditScene(graphene.Mutation):
    scene = graphene.Field(SceneType)

    class Arguments:
        scene_id = graphene.Int(required=True)
        title = graphene.String(required=True)
        thumbnail_url = graphene.String()
        preview_url = graphene.String()
        length = graphene.Time()
        description = graphene.String()
        gallary_urls = graphene.String()
        studio = graphene.String()
        director = graphene.String()
        release_date = graphene.Date()
        movie = graphene.String()
        rating = graphene.Int()

    def mutate(self, info, scene_id, title, thumbnail_url, preview_url, length, description,
                 gallary_urls, studio, director, release_date, movie, rating
                ):
       
        scene = Scene.objects.get(id=scene_id)

        scene.id = scene_id
        scene.title = title
        scene.thumbnail_url = thumbnail_url
        scene.preview_url = preview_url
        scene.length = length
        scene.description = description
        scene.gallary_urls = gallary_urls
        scene.studio = studio
        scene.director = director
        scene.release_date = release_date
        scene.movie = movie
        scene.rating = rating

        scene.save()

        return EditScene(scene)

class EditMovie(graphene.Mutation):
    movie = graphene.Field(MovieType)

    class Arguments:
        movie_id = graphene.Int(required=True)
        movie_title = graphene.String(required=True)
        movie_cover = graphene.String()
        movie_trailer = graphene.String()
        length = graphene.Time()
        description = graphene.String()
        gallary_urls = graphene.String()
        studio = graphene.String()
        director = graphene.String()
        release_date = graphene.Date()
        genres = graphene.String()
        rating = graphene.Int()
        tags = graphene.String()
        performers = graphene.String()

    def mutate(self, info, moive_id, movie_title, movie_cover, movie_trailer, length, description,
                 gallary_urls, studio, director, release_date, genres, rating, tags, performers
                ):
       
        movie = Movie.objects.get(id=moive_id)

        movie.id = moive_id
        movie.movie_title = movie_title
        movie.movie_cover = movie_cover
        movie.movie_trailer = movie_trailer
        movie.length = length
        movie.description = description
        movie.gallary_urls = gallary_urls
        movie.studio = studio
        movie.director = director
        movie.release_date = release_date
        movie.genres = genres
        movie.rating = rating
        movie.tags = tags
        movie.performers = performers

        movie.save()

        return EditMovie(movie)

class EditTag(graphene.Mutation):
    tag = graphene.Field(TagsType)

    class Arguments:
        tag_id = graphene.Int(required=True)
        tag_name = graphene.String(required=True)

    def mutate(self, info, tag_id, tag_name):
        tag = Tags.objects.get(id=tag_id)

        tag.tag_name = tag_name

        tag.save()
        return EditTag(tag)

class EditStudio(graphene.Mutation):
    studio = graphene.Field(StudioType)

    class Arguments:
        studio_id = graphene.Int(required=True)
        studio = graphene.String(required=True)
        parent_studio = graphene.String()
        url = graphene.String()
        description = graphene.String()

    def mutate(self, info, studio_id, studio, parent_studio, url, description):
        studio = Studios.objects.get(id=studio_id)

        studio.studio = studio
        studio.parent_studio = parent_studio
        studio.url = url
        studio.description = description

        studio.save()
        return EditTag(studio)








class Mutation(graphene.ObjectType):
    create_performer = CreatePerformer.Field()
    edit_performer = EditPerformer.Field()
    favorite_performer = CreatePerformerFavorite.Field()
    
    create_tag = CreateTag.Field()
    edit_tag = EditTag.Field()

    edit_studio = EditStudio.Field()

    edit_scene = EditScene.Field()
    favorite_scene = CreateSceneFavorite.Field()

    edit_movie = EditMovie.Field()
    favorite_movie = CreateMovieFavorite.Field()