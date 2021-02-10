from django.contrib.auth import get_user_model

import graphene
from graphene_django import DjangoObjectType

class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        only_fields = ('id', 'email', 'password', 'username')


class Query(graphene.ObjectType):
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    me = graphene.Field(UserType)

    def resolve_user(self, info, id):
        return get_user_model().objects.get(id=id)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('not logged in!')
        return user



class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        passwd = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, passwd, email):
        user = get_user_model()(
            username = username,
            email = email
        )

        user.set_password(passwd)
        user.save()

        return CreateUser(user)    

class Mutation(graphene.ObjectType):

    create_user = CreateUser.Field()