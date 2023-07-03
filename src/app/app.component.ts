import { Component } from '@angular/core';
import { LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'AutoDraw';
  fontColor: string = 'red';
  sayHelloId: string = 'sayHelloId';

  canClick: boolean = true;
  messenger: string = "I'm read only!";
  count: number = 0;

  constructor(private logger: LoggerService) {}

  toggleClick = () => {
    this.canClick = !this.canClick;
    if (this.canClick) {
      this.messenger = 'You can edit me!';
    } else {
      this.messenger = "I'm read only!";
    }
  };

  showAlert = () => {};

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
