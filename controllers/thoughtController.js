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
    
}