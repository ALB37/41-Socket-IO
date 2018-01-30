'use strict';

const socket = io(); //eslint-disable-line

let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messagesContainer = document.getElementById('messages');
let setUsernameForm = document.getElementById('set-username-form');
let usernameInput = document.getElementById('username-input');

setUsernameForm.addEventListener('submit', event => {
  event.preventDefault();
  let username = usernameInput.value;
  socket.emit('set-username', {username});
  usernameInput.value = null;
});

sendMessageForm.addEventListener('submit', event => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', {message});
  messageInput.value = null;
});

socket.on('receive-message', data => {
  let message = new ChatMessage(data); //eslint-disable-line
  message.render(messagesContainer);
});