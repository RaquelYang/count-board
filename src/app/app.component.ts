import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deferredPrompt: any;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault(); // 阻止默認提示
      this.deferredPrompt = event; // 儲存事件供稍後使用
    });
  }

  addToHomeScreen() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt(); // 顯示安裝提示
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
    }
  }
}
