import { Component, OnInit } from '@angular/core';
import { MessageModel, messages } from './models/messages';
import { topToBottom, apearAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  animations: [apearAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Oo';
  left = 'calc(50% - 75px)';
  top = '50vh';
  currentMesage: MessageModel;
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
    this.currentMesage.message = null;
    setTimeout(() => {
      this.currentMesage = messages.find(message => message.id === this.currentMesage.ok);
      this.initCancel();
    }, 300);
  }
  deny(): void {
    this.changePosition();
    if (this.currentMesage?.blink) {
      return;
    }
    setTimeout(() => {
      this.currentMesage = messages.find(message => message.id === this.currentMesage.cancel);
      this.initCancel();
    }, 300);
  }

  initCancel(): void {
    this.left = 'calc(50% - 75px)';
    this.top = '50vh';
  }

  retry(): void {
    this.initCancel();
    this.currentMesage = messages.find(message => message.id === 0);

  }

}
