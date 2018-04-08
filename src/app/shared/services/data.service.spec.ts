import { TestBed, inject } from '@angular/core/testing';

import { FieldsService } from './data.service';

describe('FieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldsService]
    });
  });

  it('should be created', inject([FieldsService], (service: FieldsService) => {
    expect(service).toBeTruthy();
  }));
});
