import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEventComponent } from './pending-event.component';

describe('PendingEventComponent', () => {
  let component: PendingEventComponent;
  let fixture: ComponentFixture<PendingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
