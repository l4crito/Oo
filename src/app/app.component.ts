import { Component, OnInit } from '@angular/core';

import { topToBottom, ok, apearAnimation, bottomToTop } from './animations/animations';
import { warns, MessageModel, messages } from './models/messages';

@Component({
  selector: 'app-root',
  animations: [topToBottom, ok, apearAnimation, bottomToTop],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dorito';

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
  warning = '';
  warningIndex = -1;
  centered = false;
  done = [];
  ngOnInit(): void {
    this.retry();
  }

  changePosition(): void {

    if (!this.currentMesage?.blink) {
      return;
    }
    this.checkWarnings();
    let l = Math.floor(Math.random() * window.innerWidth) + 200;
    let t = Math.floor(Math.random() * window.innerHeight) + 50;
    l = l > window.innerWidth - 150 ? window.innerWidth - 200 : l;
    t = t > window.innerHeight - 35 ? window.innerHeight - 200 : t;
    this.cancel.left = l + 1 + 'px';
    this.cancel.top = t + 1 + 'px';
  }
  changeMaybePosition(): void {
    this.checkWarnings();
    let l = Math.floor(Math.random() * window.innerWidth) + 200;
    let t = Math.floor(Math.random() * window.innerHeight) + 50;
    l = l > window.innerWidth - 150 ? window.innerWidth - 200 : l;
    t = t > window.innerHeight - 35 ? window.innerHeight - 200 : t;
    this.maybe.left = l + 1 + 'px';
    this.maybe.top = t + 1 + 'px';
  }

  acept(): void {
    this.initWarning();
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
  centerOk(): void {
    this.ok.left = 'calc(50vw - 30px)';
    this.centered = true;
  }

  retry(): void {
    this.initWarning();
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
  timer = null;
  checkWarnings() {
    this.playing++;
    if (this.playing % 3 === 0 && this.currentMesage?.maybe) {
      this.centerOk();
      this.warning = warns[this.getIndex()];
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.warning = '';
      }, 3000);
    }
  }

  initWarning() {
    this.playing = 0;
    this.warningIndex = -1
    this.warning = '';
    this.centered = false;
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  getIndex(): number {
    if (this.done.length === warns.length) {
      this.done = [];
    }
    const index = Math.floor(Math.random() * warns.length);
    if (this.done.find(i => i === index)) {
      return this.getIndex();
    }
    this.done.push(index);
    console.log(index);
    return index;
  }

}
