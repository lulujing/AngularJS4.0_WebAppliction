import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }
  greeting(name: string) {
    console.log('hello' + name);
  }
  ngAfterViewInit(): void {
    console.log('child component Init');
  }

  ngAfterViewChecked(): void {
    console.log('child component changed');
  }

}
