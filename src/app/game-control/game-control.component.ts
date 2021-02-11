import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() number = new EventEmitter<number>();
  ref : number;
  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
  this.ref = setInterval( () => {
    this.number.emit( Math.ceil( Math.random() * 10 ) );
  }, 1000 );
  }

  onStop() {
    clearInterval( this.ref );
  }
}
