'use strict';

class ChatMessage {
  constructor(data){
    this.username = data.username;
    this.timestamp = data.timestamp;
    this.message = data.message;
  }

  render(parentElement){
    const container = document.createElement('div');
    const timestamp = document.createElement('span');
    const username = document.createElement('span');
    const message = document.createElement('span');

    container.classList.add('message');
    timestamp.classList.add('timestamp');
    username.classList.add('username');
    message.classList.add('text-content');

    timestamp.textContent = this.timestamp;
    username.textContent = this.username + ':';
    message.textContent = this.message;

    container.appendChild(timestamp);
    container.appendChild(username);
    container.appendChild(message);

    parentElement.appendChild(container);
  }
}