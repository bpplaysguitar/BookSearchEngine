const { Book, User } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId});
    },
  },
  Mutation: {
    createUser: async (parent, { name }) => {
      
      return User.create({ name });
    },
    saveBook: async (parent, { _id, bookNum }) => {
      const book = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return book;
    },
  },
};

module.exports = resolvers;
