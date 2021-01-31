import { Component, OnInit } from '@angular/core';

import { topToBottom, ok, apearAnimation } from './animations/animations';
import { MessageModel, messages } from './models/messages';

@Component({
  selector: 'app-root',
  animations: [topToBottom, ok, apearAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Oo';

  ok = {
    top: '40vh',
    left: 'calc(50vw - 30px)'
  }
  cancel = {
    top: '40vh',
    left: 'calc(50vw - 30px)'
  }
  maybe = {
    top: 'calc(40vh + 60px)',
    left: 'calc(50vw - 75px)'
  }
  currentMesage: MessageModel = {};
  playing = 0;
  ngOnInit(): void {
    this.retry();
  }

  changePosition(): void {
    
    if (!this.currentMesage?.blink) {
      return;
    }
    this.playing++;
    let l = Math.floor(Math.random() * window.innerWidth) + 200;
    let t = Math.floor(Math.random() * window.innerHeight) + 50;
    l = l > window.innerWidth - 150 ? window.innerWidth - 200 : l;
    t = t > window.innerHeight - 35 ? window.innerHeight - 200 : t;
    this.cancel.left = l + 1 + 'px';
    this.cancel.top = t + 1 + 'px';
  }
  changeMaybePosition(): void {
    this.playing++;
    let l = Math.floor(Math.random() * window.innerWidth) + 200;
    let t = Math.floor(Math.random() * window.innerHeight) + 50;
    l = l > window.innerWidth - 150 ? window.innerWidth - 200 : l;
    t = t > window.innerHeight - 35 ? window.innerHeight - 200 : t;
    this.maybe.left = l + 1 + 'px';
    this.maybe.top = t + 1 + 'px';
  }

  acept(): void {
    this.playing = 0;
    this.setMessage(this.currentMesage.ok);
  }
  deny(): void {
    this.changePosition();
    if (this.currentMesage?.blink) {
      return;
    }
    this.setMessage(this.currentMesage.cancel);
  }

  initCancel(): void {
    this.cancel.left = 'calc(50vw - 60px - 30px)';
    this.cancel.top = '40vh';
    this.ok.left = 'calc(50vw + 30px)';
    this.ok.top = '40vh';
    this.maybe.left = 'calc(50vw - 100px)';
    this.maybe.top = 'calc(40vh + 100px)';
  }

  retry(): void {
    if (this.currentMesage?.final) {
      this.currentMesage = JSON.parse(JSON.stringify(messages.find(message => message.id === 0)));
      this.initCancel();
    } else {
      this.setMessage(0, 300);
    }
  }

  setMessage(id: number, timeout = 300): void {
    this.currentMesage.message = null;
    setTimeout(() => {
      this.currentMesage = JSON.parse(JSON.stringify(messages.find(message => message.id === id)));
      this.initCancel();
    }, timeout);

  }

}
