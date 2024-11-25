import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deferredPrompt: any;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault(); // Prevent the default prompt
        this.deferredPrompt = event; // Save the event for later use
      });
    }
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
