import { Component } from '@angular/core';
import { WebsocketService } from '../web-socket.service';

@Component({
  selector: 'app-web-socket-chat',
  templateUrl: './web-socket-chat.component.html',
  styleUrls: ['./web-socket-chat.component.css'],
})
export class WebSocketChatComponent {
  received: any[] = [];
  sent: any[] = [];
  username: string = '';
  content: string = '';

  constructor(private chatService: WebsocketService) {
    chatService.messages.subscribe((msg) => {
      console.log(msg);
      this.received.push(msg);
      console.log('Response from websocket: ' + msg);
    });
  }

  sendMsg() {
    let message = {
      source: this.username,
      content: this.content,
    };
    this.sent.push(message);
    this.chatService.messages.next(message);
  }
}
