import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScoketComponent } from './web-scoket.component';

describe('WebScoketComponent', () => {
  let component: WebScoketComponent;
  let fixture: ComponentFixture<WebScoketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebScoketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebScoketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
