import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventsProgressComponent } from './my-events-progress.component';

describe('MyEventsProgressComponent', () => {
  let component: MyEventsProgressComponent;
  let fixture: ComponentFixture<MyEventsProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventsProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
