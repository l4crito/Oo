import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oo';
  left = 'calc(50% - 75px)';
  top = '50vh';
  ok = false;

  changePosition(): void {
    let l = Math.floor(Math.random() * window.innerWidth) + 200;
    let t = Math.floor(Math.random() * window.innerHeight) + 50;
    l = l > window.innerWidth - 150 ? window.innerWidth - 200 : l;
    t = t > window.innerHeight - 35 ? window.innerHeight - 200 : t;
    this.left = l + 1 + 'px';
    this.top = t + 1 + 'px';
  }
}
