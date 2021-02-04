import graphene 
import performers.schema

class Query(performers.schema.Query, graphene.ObjectType):
    pass

class Mutation(performers.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
