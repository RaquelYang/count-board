import { afterNextRender, Component, HostListener, signal} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile: boolean;
  landscape = false;
  score1 = signal(0);
  score2 = signal(0);
  showMinus = false;

  constructor(
    deviceService: DeviceDetectorService,
  ) {
    this.isMobile = deviceService.isMobile();

    afterNextRender(() => {
      const orientationAngle = window.screen.orientation.angle;
      this.landscape = this.isLandscape(orientationAngle);
    });
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event): void {
    const orientationAngle = (event.target as Window).screen.orientation.angle;
    this.landscape = this.isLandscape(orientationAngle);
  }

  isLandscape(deg: number): boolean {
    return deg === 90;
  }

  plusScore1(): void {
    this.score1.update((prev) => prev + 1);
    this.showMinus = false;
  }

  minusScore1(e: Event): void {
    e.stopPropagation();
    if (this.score1() > 0) {
      this.score1.update((prev) => prev - 1);
    }
    this.showMinus = false;
  }

  plusScore2(): void {
    this.score2.update((prev) => prev + 1);
    this.showMinus = false;
  }

  minusScore2(e: Event): void {
    e.stopPropagation();
    if (this.score2() > 0) {
      this.score2.update((prev) => prev - 1);
    }
    this.showMinus = false;
  }

  resetScore(): void {
    this.score1.set(0);
    this.score2.set(0);
    this.showMinus = false;
  }
}

