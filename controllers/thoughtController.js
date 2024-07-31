// Import the User and thought model from the models folder
const { User, Thought } = require('../../models');

module.exports = {
    // Get all thoughts
    getThought (req, res) {
        Thought.find({})
        .then((thought) => res.json(thought))
        .catch((error) => res.status(500).json(error));
    },
    // Get single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select("-_v")
        .then((thought) => 
        !thought
        ? res.status(404).json({ message: "No Thought found with this ID!" })
        : res.json(thought)
        )
        .catch((error) => res.status(500).json(error));
    },
    // Create a thought and push the created thought's _id to the correct user's thought
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
    ).catch((error) => res.status(500).json(error));
    },
    // Update thoughts
updateThought(req, res) {
    Thought.FindOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, New: true }
    )
    .then((user) => 
    !user
    ? res.status(404).json({ message: "No thought find with this ID!"})
    : res.json(user)
)
.catch((error) => res.json(500).json(error));
},

// Delete thought
}