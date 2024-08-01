// Import the User and thought model from the models folder
const { User, Thought } = require("../models");

module.exports = {
    // Get all thoughts
    getThought(req, res) {
      Thought.find({})
        .then((thought) => res.json(thought))
        .catch((error) => res.status(500).json(error));
    },
    // Get single thought
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select("-__v")
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No Thought find with this ID!" })
            : res.json(thought)
        )
        .catch((error) => res.status(500).json(error));
    },
    // Create a thought and push the created thought's _id to the associated user's thoughts array field
    createThought(req, res) {
      Thought.create(req.body)
        .then(({ _id }) => {
          return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: _id } },
            { new: true }
          );
        })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No User find with this ID!" })
            : res.json(thought)
        )
        .catch((error) => res.status(500).json(error));
    },
    // Update a thought
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, New: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: "No thought find with this ID!" })
            : res.json(user)
        )
        .catch((error) => res.status(500).json(error));
    },
    // Delete a thought
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No thought find with this ID!" })
            : User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
              )
        )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'Thought deleted, but no user found'})
            : res.json({ message: 'Thought successfully deleted' })
        )
        .catch((error) => res.status(500).json(error));
    },
    // Create reaction
    createReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No thought frind with ID!" })
            : res.json(thought)
        )
        .catch((error) => res.status(500).json(error));
    },

    // Delete reaction

    deleteReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No thought find with this ID!" })
            : res.json(thought)
        )
        .catch((error) => res.status(500).json(error));
    },
  };