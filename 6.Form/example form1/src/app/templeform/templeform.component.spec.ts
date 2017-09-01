import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleformComponent } from './templeform.component';

describe('TempleformComponent', () => {
  let component: TempleformComponent;
  let fixture: ComponentFixture<TempleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
