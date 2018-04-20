import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDoneComponent } from './event-done.component';

describe('EventDoneComponent', () => {
  let component: EventDoneComponent;
  let fixture: ComponentFixture<EventDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
