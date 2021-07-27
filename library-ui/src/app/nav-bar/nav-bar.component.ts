import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() someEvent = new EventEmitter();

  menuButtonPressed( menuItem : string) {
    this.someEvent.emit(menuItem);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
