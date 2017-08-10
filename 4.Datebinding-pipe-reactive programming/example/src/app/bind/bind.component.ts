import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})

export class BindComponent implements OnInit {
 imgUrl = 'http://via.placeholder.com/350x150';
 size= 2;
 divClass1= { a: true, b: true, c: false};
 divClass: string;
 isBig= false;
 isDev= false;
 divStyle: any
  = {
   color: 'red',
   background: 'blue'
 };
 birthday: Date= new Date( );
 name= 'string';
 nameA= 'aa';
 constructor() {
   setTimeout(() => {this.isDev = true; this.divClass = 'a b c';
    this.isBig = true; this.divClass1 = { a: false, b: false, c: true };
    this.divStyle = { color: 'blue', background: 'pink'}; }, 3000 );
   setInterval(() => { this.name = 'Tome'; }, 5000);
}
  ngOnInit() {
  }
doOnClick(event: any) {
    console.log(event);
}
  doOnInput(event: any ) {
    console.log(event.target.value);
    console.log(event.target.getActiveAttrib('value'));
}
doOnInputA(event) {
    this.name = event.target.value;
  }
  doOnInputB(event) {
    console.log('from view to model');
  }
}
