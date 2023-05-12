const { gql } = require('apollo-server-express')

const typeDefs = gql`

type User {
_id: ID!
username: String!
email: String!
}

type Auth {
    token: ID!
    user: User
}

type Media {
    _id: ID
    mediaId: String
    mediaType: String
    title: String
    description: String
    image: String
}

type Query {
    me: User
    media:[Media]
}

    input changedMedia {
    mediaId: String 
    mediaType: String
    title: String
    description: String
    image: String
 
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMedia(media: changedMedia!): Media
    updateMedia (media: changedMedia!): Media
    deleteMedia (mediaId: ID!): Media
}
`;

module.exports = typeDefs;