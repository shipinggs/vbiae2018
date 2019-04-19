import { TestBed, inject } from '@angular/core/testing';

import { AcknowledgementGroupService } from './acknowledgement-group.service';

describe('AcknowledgementGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcknowledgementGroupService]
    });
  });

  it('should be created', inject([AcknowledgementGroupService], (service: AcknowledgementGroupService) => {
    expect(service).toBeTruthy();
  }));
});
