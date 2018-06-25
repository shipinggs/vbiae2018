import { TestBed, inject } from '@angular/core/testing';

import { CommissionersCuratorsService } from './commissioners-curators.service';

describe('CommissionersCuratorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommissionersCuratorsService]
    });
  });

  it('should be created', inject([CommissionersCuratorsService], (service: CommissionersCuratorsService) => {
    expect(service).toBeTruthy();
  }));
});
