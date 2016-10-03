/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnthropyService } from './enthropy.service';

describe('Service: Enthropy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnthropyService]
    });
  });

  it('should ...', inject([EnthropyService], (service: EnthropyService) => {
    expect(service).toBeTruthy();
  }));
});
