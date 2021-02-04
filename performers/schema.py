import graphene 
from graphene_django import DjangoObjectType
from .models import Performer, Movie, Scene, Studios, Tags

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



#Query for each one
class Query(graphene.ObjectType):
    performers = graphene.List(PerformerType)
    scenes = graphene.List(SceneType)
    movies = graphene.List(MovieType)
    studios = graphene.List(StudioType)
    tags = graphene.List(TagsType)

    def resolve_performers(self, info):
        return Performer.objects.all()

    def resolve_scenes(self, info):
        return Scene.objects.all()

    def resolve_movies(self, info):
        return Movie.objects.all()

    def resolve_studios(self, info):
        return Studios.objects.all()

    def resolve_tags(self, info):
        return Tags.objects.all()

class CreatePerformer(graphene.Mutation):
    performer = graphene.Field(PerformerType)

    class Arguments:
        name = graphene.String()
        description = graphene.String()
        profile_pic = graphene.String()

    def mutate(self, info, **Kwargs):
        performer = Performer(**Kwargs)
        performer.save()
        return CreatePerformer(performer)


class Mutation(graphene.ObjectType):
    create_performer = CreatePerformer.Field()
