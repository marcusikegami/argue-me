// This checks for the user context
import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User.js';
import Argument from '../models/Argument.js';
import auth from'../utils/auth.js'; 


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('arguments');

                return userData;
            }
        

            throw new AuthenticationError('Not logged in!');
        },
        users: async () => {
                return User.find()
                .select('-__v -password')
                // .populate('arguments');
            },
        user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('arguments');
          },
        arguments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Argument.find(params).sort({ createdAt: -1 });
          },
        argument: async (parent, { _id }) => {
            return Argument.findOne({ _id });
          }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = auth.signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = auth.signToken(user);
            
            return { token, user };
          },
          addArgument: async (parent, args, context) => {
            if (context.user) {
              const argument = await Argument.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { arguments: argument._id }, author: context.user._id },
                { new: true }
              );
      
              return argument;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          addComment: async (parent, { argumentId, commentBody }, context) => {
            if (context.user) {
              const updatedArgument = await Argument.findOneAndUpdate(
                { _id: argumentId },
                { $push: { comments: { commentBody, author: context.user.username } } },
                { new: true, 
                  // runValidators: true
                 }
              );
      
              return updatedArgument;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          
    }
};

export default resolvers;