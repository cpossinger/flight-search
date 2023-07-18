import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  selectedOrigin!: string;
  selectedDestination!: string;

  receiveSelectedOrigin(origin: string) {
    this.selectedOrigin = origin;
  }

  receiveSelectedDestination(destination: string) {
    this.selectedDestination = destination;
  }
}
