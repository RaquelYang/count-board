import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isMobile = false;
  orientation = '';
  constructor(
    private deviceService: DeviceDetectorService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();

    this.getWindow()?.addEventListener('orientationchange', () => {
      this.orientation = this.deviceService.orientation;
    })
  }

  getWindow(): Window | null {
    return isPlatformBrowser(this.platformId) ? window : null;
  }
}

