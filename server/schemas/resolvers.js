// This checks for the user context
const { AuthenticationError } = require('apollo-server-express');
const { User, Argument } = require('../models/index.js');
const { signToken } = require('../utils/auth'); 

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne
            }
        }
    },

    Mutation: {

    }
};

module.exports = resolvers;