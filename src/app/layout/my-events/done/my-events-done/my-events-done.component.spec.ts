import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventsDoneComponent } from './my-events-done.component';

describe('MyEventsDoneComponent', () => {
  let component: MyEventsDoneComponent;
  let fixture: ComponentFixture<MyEventsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
