import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvr',
  template: `<h2 class='red'>CVR Component</h2>
  <input type='text' [(ngModel)]='myProperty' />
  
  <br />
  <br />
  <span [style.border]="myProperty ? '1px solid blue' : 'none'">{{myProperty}}</span>
  <br />
  <br />
  <input type='button' value='OK' (click) = 'onClick()' [disabled] = 'myProperty' />`,
  styleUrls: ['./cvr.component.css']
})
export class CvrComponent implements OnInit {

  private myProperty : string = "Empty me to enable the button";
  constructor() { }

  ngOnInit() {
  }

  private onClick(){
    alert('working good');
  }
}
