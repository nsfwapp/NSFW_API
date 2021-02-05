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

#Create Mutation
class CreatePerformer(graphene.Mutation):
    performer = graphene.Field(PerformerType)

    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String()
        profile_pic = graphene.String()

    def mutate(self, info, **Kwargs):
        performer = Performer(**Kwargs)
        performer.save()
        return CreatePerformer(performer)

class CreateTag(graphene.Mutation):
    tag = graphene.Field(TagsType)

    class Arguments:
        tag = graphene.String(required=True)

    def mutate(self, info, tag=tag):
        tag = Tags(tag=tag)
        tag.save()
        return CreateTag(tag)


#Edit Mutation
class EditPerformer(graphene.Mutation):
    performer = graphene.Field(PerformerType)

    class Arguments:
        performer_id = graphene.Int()
        name = graphene.String(required=True)
        description = graphene.String()
        profile_pic = graphene.String()

    def mutate(self, info, **Kwargs):
       
        performer = Performer.objects.get(id=Kwargs['performer_id'])
        for k, v in Kwargs.items():
            performer.k = v

        performer.save()

        return EditPerformer(performer)

class EditTag(graphene.Mutation):
    tag = graphene.Field(TagsType)

    class Arguments:
        tag_id = graphene.Int()
        tag = graphene.String(required=True)

    def mutate(self, info, tag_id, tag):
        tag = Tags.objects.get(id=tag_id)

        tag.tag = tag

        tag.save()
        return EditTag(tag)








class Mutation(graphene.ObjectType):
    create_performer = CreatePerformer.Field()
    create_tag = CreateTag.Field()
    edit_performer = EditPerformer.Field()
    edit_tag = EditTag.Field()
