import { TestBed, inject } from '@angular/core/testing';

import { HomeCarouselService } from './home-carousel.service';

describe('HomeCarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeCarouselService]
    });
  });

  it('should be created', inject([HomeCarouselService], (service: HomeCarouselService) => {
    expect(service).toBeTruthy();
  }));
});
