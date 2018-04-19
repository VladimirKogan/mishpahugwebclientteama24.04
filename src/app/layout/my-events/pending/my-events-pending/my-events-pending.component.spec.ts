import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventsPendingComponent } from './my-events-pending.component';

describe('MyEventsPendingComponent', () => {
  let component: MyEventsPendingComponent;
  let fixture: ComponentFixture<MyEventsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
