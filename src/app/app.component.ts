import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers : number[] = [];
  onNumberCreated(number) {
    this.numbers.push( number );
  }
}
