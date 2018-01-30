'use strict';

const socket = io(); //eslint-disable-line

const sendMessageForm = document.getElementById('send-message-form');
const instructions = document.getElementById('instructions');
const welcomeMessage = document.getElementById('welcome-message');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');
const setUsernameForm = document.getElementById('set-username-form');
const usernameInput = document.getElementById('username-input');

setUsernameForm.addEventListener('submit', event => {
  event.preventDefault();
  const username = usernameInput.value;
  socket.emit('set-username', {username});
  const welcomeHeader = document.createElement('h2');
  welcomeHeader.textContent = `Welcome, ${username}!`;
  welcomeMessage.appendChild(welcomeHeader);
  instructions.style.display = 'none';
  setUsernameForm.style.display = 'none';
  sendMessageForm.style.display = 'block';
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