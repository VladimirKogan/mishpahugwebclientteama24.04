import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubscribersComponent } from './event-subscribers.component';

describe('EventSubscribersComponent', () => {
  let component: EventSubscribersComponent;
  let fixture: ComponentFixture<EventSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
