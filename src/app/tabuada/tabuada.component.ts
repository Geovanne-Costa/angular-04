import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit() {}

  getResults() {
    return [[0,0],
     [1,5],
     [2,10], 
     [3,15], 
     [4,20], 
     [5,25], 
     [6,30], 
     [7,35], 
     [8,40], 
     [9,45], 
     [10,50]];
  }
}
