# Social Network API

## Description

This project is a social network API that utilizes a NoSQL database (MongoDB) to handle large amounts of unstructured data. It provides endpoints for managing users, thoughts, reactions, and friends. The application uses Mongoose for data modeling and includes features such as creating, updating, and deleting users and thoughts, as well as adding reactions to thoughts and managing a user's friend list.
## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following screenshots show examples of the application's API routes being tested in Insomnia.

![Demo of GET routes to return all thoughts being tested in Insomnia.](./public/assets/Social%20Network%20Get%20All%20Thoughts.jpg)![All users tested in Insomnia](./public/assets/Social%20Network%20FindAllUsers.jpg)

The following screenshot shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo shows GET routes to return a single user being tested in Insomnia.](./public/assets/Social%20Network%20Find%20User%20byId.jpg) ![Single thought being tested in Insomnia](./public/assets/Social%20Network%20Get%20Thought%20ById.jpg)

The following screenshot shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./public/assets/Social%20Network%20Delete%20User.jpg). ![Add new user](./public/assets/Social%20Network%20New%20User.jpg). ![Update user](./public/assets/Social%20Network%20Update%20User.jpg)

In addition to this, a walkthrough video shows the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.
![Demo shows POST, PUT, and DELETE routes for thoughts](./public/assets/Social%20Network%20AddCreate%20Thought.jpg) ![Delete thought](./public/assets/Social%20Network%20Delete%20Thought.jpg) ![Update thought](./public/assets/Social%20Network%20Update%20Thought.jpg)

The following screenshot shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./public/assets/Social%20Network%20Add%20Friend.jpg). ![Delete friend](./public/assets/Social%20Network%20Delete%20Friend.jpg).

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.
![Demo that shows POST and DELETE routes for reactions on thoughts](./public/assets/Social%20Network%20Create%20Reaction.jpg) ![Delete reaction](./public/assets/Social%20Network%20Delete%20Reaction.jpg)

## Getting Started

Be sure to have MongoDB installed on your machine. 


## Installation

1. npm install
2. npm start


