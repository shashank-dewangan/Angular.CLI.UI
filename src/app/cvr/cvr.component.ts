import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvr',
  templateUrl: './cvr.component.html',
  styleUrls: ['./cvr.component.css']
})
export class CvrComponent implements OnInit {

  private myProperty : string = "Empty me to enable the button";
  private priority : string = "lows";
  private cls:any =
  { yellow:true,
    greenBck:this.myProperty}

  constructor() { }

  ngOnInit() {
  }

  private onClick(){
    alert('working good');
  }
}
