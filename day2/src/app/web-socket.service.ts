import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const CHAT_URL = 'ws://localhost:5001';

export interface Message {
  source: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private subject: AnonymousSubject<MessageEvent> | null = null;
  public messages: Subject<Message>;

  constructor() {
    this.messages = this.connect(CHAT_URL).pipe(
      map((response: MessageEvent): Message => {
        console.log(response.data);
        let data = JSON.parse(response.data);
        return data;
      })
    ) as Subject<Message>;
  }

  public connect(url: string): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url: string): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });

    let observer = {
      error: (error: Error) => {
        console.log(error);
      },
      complete: () => {
        console.log('All done!');
      },
      next: (data: Object) => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
    };

    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
