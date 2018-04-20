import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveentParticipantsComponent } from './eveent-participants.component';

describe('EveentParticipantsComponent', () => {
  let component: EveentParticipantsComponent;
  let fixture: ComponentFixture<EveentParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveentParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveentParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
