import { Component } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrowserModule, HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // 處理 Tap 事件
  onTap() {
    alert('Tap detected!');
  }

  // 處理 Swipe 事件
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSwipe(event: any) {
    alert('Swipe detected');
    if (event.deltaX > 0) {
      alert('Swiped Right');
    } else {
      alert('Swiped Left');
    }
  }

  // 處理 Pan 事件
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPan(event: any) {
    alert('Pan detected');
    alert(`Moved by X: ${event.deltaX}, Y: ${event.deltaY}`);
  }
}
