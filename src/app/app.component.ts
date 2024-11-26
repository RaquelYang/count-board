import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile = false;
  isLandscape = false;

  constructor(
    deviceService: DeviceDetectorService,
  ) {
    this.isMobile = deviceService.isMobile();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event): void {
    const orientationAngle = (event.target as Window).screen.orientation.angle;
    this.isLandscape = orientationAngle === 90;

  }
}

