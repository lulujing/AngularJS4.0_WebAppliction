import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Child2Component} from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  title = 'app works!';
  greeting= 'Hello';
  user: {name: string}= {name: 'Tom'};
@ViewChild('child21')
child21: Child2Component;

ngOnInit( ): void {
  setInterval(() => {
  this.child21.greeting('Tom'); }, 5000);
}
  ngAfterViewInit(): void {
  console.log('father component Init');
  }

  ngAfterViewChecked(): void {
  console.log('father component changed');
  }
}
