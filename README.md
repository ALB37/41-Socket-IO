![cf](https://i.imgur.com/7v5ASc8.png) 43: Socket IO with Vanilla JS
===

# Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Submit a pull request to this repository
* Submit a link to your pull request on canvas
* Submit a question, observation, and how long you spent on canvas 

## Learning Objectives  
* Students will learn to add real time connections from their client to their server
* Students will gain more experience working with Vanilla JS

#### Feature Tasks  
#### Frontend 
* Create a simple website where users can chat
* Create an input that allows a user to choose their username
* Display a log of chats with usernames, messages and timestamps
* Add Socket IO to your frontend, with a means for adding subscriber handlers
* Subscribe to the backend events

### Models
* Use Vanilla ES6 classes to model chat messages
* Chat messages should have at least the following properties
  * username
  * message
  * timestamp
* Add `render(parentElement)` method to the class
  * Use vanilla DOM manipulations to create elements and attach them to the
    page.
  * Do not use jQuery.
  * Do not ever use `innerHTML`.
  * Use `.textContent` for text content.

#### Backend
* Add Socket IO to your backend, with a means for adding subscriber handlers 
* Subscribe to events dispatched from the frontend
  * In your subscribers publish data to the frontends to update the chat
* You do not need to store data to a database. It's OK to store data in the
  global state of the server for now.

#### Documentation  
Write a description of the project in your README.md

#### Testing  
Tests are not required.

## Stretch Goals
* (Medium) Save the chat history in MongoDB so it persists even if the server
  restarts.
* (Medium) Allow users to input a URL of an image to use as a profile picture
* (Hard) Allow users to directly message each other privately
* Have fun and add any other chat features you can imagine!
