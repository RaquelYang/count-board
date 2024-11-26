import { Component, OnInit } from '@angular/core';
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
  constructor(private deviceService: DeviceDetectorService) {
    console.log(deviceService.getDeviceInfo());
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();

  }
}
