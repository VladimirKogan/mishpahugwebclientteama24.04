import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcropComponent } from './imgcrop.component';

describe('ImgcropComponent', () => {
  let component: ImgcropComponent;
  let fixture: ComponentFixture<ImgcropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
