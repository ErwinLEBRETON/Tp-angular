import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {

  itemStringArray = ['RPG','FPS'];

  

  constructor() { }

  ngOnInit() {
  }

}
