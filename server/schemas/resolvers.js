const { User, Media } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {

        me: async (parent, args, context) => {
            console.log(context.user)
            if (context.user) {

                const userData = await User.findOne({})
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in')
        },

        media: async (parent, args) => {
            return Media.find()
        }
    },
    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        addMedia: async (parent, { media }) => {
            const { mediaId, mediaType, title, description, image } = media;
            return Media.create(media)
        },

        updateMedia: async (
            parent,
            { media: { _id, mediaId, mediaType, title, description, image } }
        ) => {

            return Media.findOneAndUpdate({
                _id,
                mediaId,
                mediaType,
                title,
                description,
                image,
            });
        },

        deleteMedia: async (parent, { mediaId }) => {
            return Media.findByIdAndDelete(mediaId)
        }
    }
};

module.exports = resolvers;