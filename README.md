# Voting Server

**Logic**

The idea is that we'll have a collection of things to vote from: Movies, songs, programming languages, Horse JS quotes, anything. The app will put them against each other in pairs, so that on each round people can vote for their favorite of the pair. When there's just one thing left, that's the winner.

For example, here's how a vote on the best Danny Boyle film could go:

![img](./public/images/vote_logic.png)

## The Architecture

The system will technically consist of two applications: There's a browser app we'll make with React that provides both the user interfaces, and a server app we'll make for Node that handles the voting logic. Communication between the two will be done using WebSockets.

We're going to use Redux to organize the application code both on the client and on the server. For holding the state we'll use Immutable data structures.

[**Reference**](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
