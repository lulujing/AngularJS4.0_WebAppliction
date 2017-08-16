import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

@Input( )
greeting: string;
@Input ()
user: { name: string };
message = 'init message';
oldUsername: string;
changeDetected = false;
noChanageCount: number = 0;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  ngDoCheck(): void {
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log('user.name' + this.oldUsername + 'change' + this.user.name);
      this.oldUsername = this.user.name;
    }
    if (this.changeDetected) {
      this.noChanageCount = 0;
    } else {
      this.noChanageCount = this.noChanageCount + 1;
      console.log('noCheck: user.name ngDochect called ' + this.noChanageCount);
    }
    this.changeDetected = false;
  }

}
