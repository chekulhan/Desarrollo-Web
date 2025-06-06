import { ObjectId } from 'mongodb';

export const typeDefs = /* GraphQL */ `
  type Receta {
    _id: ID!
    nombre: String!
    ingredientes: [String!]!
    tiempoPreparacion: Int
    dificultad: String
    vegano: Boolean
  }

  type Query {
    recetas: [Receta!]!
    receta(id: ID!): Receta
  }

  input RecetaInput {
    nombre: String!
    ingredientes: [String!]!
    tiempoPreparacion: Int
    dificultad: String
    vegano: Boolean
  }

  type Mutation {
    addReceta(input: RecetaInput!): Receta!
    updateReceta(id: ID!, input: RecetaInput!): Receta
    deleteReceta(id: ID!): Boolean
  }
`;

export const resolvers = {
  Query: {
    recetas: async (_parent, _args, context) => {
      const db = context.db;
      return await db.collection('recetas').find().toArray();
    },
    receta: async (_parent, { id }, context) => {
      const db = context.db;
      return await db.collection('recetas').findOne({ _id: new ObjectId(id) });
    },
  },
  Mutation: {
    addReceta: async (_parent, { input }, context) => {
      const db = context.db;
      const receta = { ...input };
      const result = await db.collection('recetas').insertOne(receta);
      return { _id: result.insertedId, ...receta };
    },
    updateReceta: async (_parent, { id, input }, context) => {
      const db = context.db;
      const updateResult = await db.collection('recetas').findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { ...input } },
        { returnDocument: 'after' }
      );
      return updateResult.value;
    },
    deleteReceta: async (_parent, { id }, context) => {
      const db = context.db;
      const result = await db.collection('recetas').deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    },
  },
};
