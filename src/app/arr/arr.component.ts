import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styles: []
})
export class ArrComponent implements OnInit {
private arr: number[]= [1,2,3,4,5];

constructor() { }

  ngOnInit() {
  }

}
