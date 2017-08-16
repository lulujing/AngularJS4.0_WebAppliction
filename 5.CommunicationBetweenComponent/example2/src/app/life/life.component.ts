import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
let logIndex = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit
, AfterViewChecked, OnDestroy {
  @Input( )
  name: string;
  logIt(msg: string) {
    console.log(`#${logIndex++ }${msg}`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['name'].currentValue;
    this.logIt('name s proporty value is in constructor :' + name);
  }

  ngDoCheck(): void { this.logIt('ngDoCheck');
  }

  ngAfterContentChecked(): void { this.logIt('ngAfterContentChecked');
  }

  ngAfterContentInit(): void { this.logIt('ngAfterContentInit');
  }

  ngAfterViewInit(): void { this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void { this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void { this.logIt(' ngOnDestroy');
  }

  constructor() {this.logIt('name s proporty value is in constructor :' + name); }

  ngOnInit() { this.logIt('ngOnInit');
  }

}
