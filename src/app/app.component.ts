import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // 處理 Tap 事件
  onTap() {
    console.log('Tap detected!');
  }

  // 處理 Swipe 事件
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSwipe(event: any) {
    console.log('Swipe detected', event);
    if (event.deltaX > 0) {
      console.log('Swiped Right');
    } else {
      console.log('Swiped Left');
    }
  }

  // 處理 Pan 事件
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPan(event: any) {
    console.log('Pan detected', event);
    console.log(`Moved by X: ${event.deltaX}, Y: ${event.deltaY}`);
  }
}
