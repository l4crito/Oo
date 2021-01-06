import { Component, OnInit } from '@angular/core';

import { topToBottom } from './animations/animations';
import { MessageModel, messages } from './models/messages';

@Component({
  selector: 'app-root',
  animations: [topToBottom],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Oo';
  left = 'calc(50% - 75px)';
  top = '50vh';
  currentMesage: MessageModel = {};
  ngOnInit(): void {
    this.retry();
  }

  changePosition(): void {

    if (!this.currentMesage?.blink) {
      return;
    }
    let l = Math.floor(Math.random() * window.innerWidth) + 200;
    let t = Math.floor(Math.random() * window.innerHeight) + 50;
    l = l > window.innerWidth - 150 ? window.innerWidth - 200 : l;
    t = t > window.innerHeight - 35 ? window.innerHeight - 200 : t;
    this.left = l + 1 + 'px';
    this.top = t + 1 + 'px';
  }

  acept(): void {
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
    this.left = 'calc(50% - 75px)';
    this.top = '50vh';
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
