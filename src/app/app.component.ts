import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile = false;
  constructor(private deviceService: DeviceDetectorService) {
    console.log(deviceService.getDeviceInfo());
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    alert('是否為手機: ' + this.isMobile);
  }
}
