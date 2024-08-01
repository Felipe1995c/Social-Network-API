const { User, Thought } = require("../models");

module.exports = {
    // Get all users
    getUser(req, res) {
        User.find({})
        .then((user) => res.json(user))
        .catch((error) => res.status(500).json(error));
    };

    // Get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends")
        .select("-__v")
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No User linked to that ID"})
        : res.json(user)
    )
    .catch((error) => res.status(500).json(error));
    },

    // Create a user

    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((error) => {
            console.log(error);
            return res.status(500).json(error);
        });
    },

    // Update user

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
    ? res.status(404).json({ message: "No User linked to this ID"})
    : res.json(user)
)
.catch((error) => res.status(500).json(error));
    },

    // Delete user
    
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No User linked to this ID"})
        : Thought.deleteMany({ _id: {$in: user.thoughts }})
)
.then(() => res.json({ message: "User and thought deleted" }))
.catch((error) => res.status(500).json(error));
    },

    // Add friend

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
              ? res.status(404).json({ message: "No User find with this ID!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      //delete a friend
      deleteFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
          .then(
            (user) =>
              !user
                ? res.status(404).json({ message: "No User find with this ID!" })
                : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    };