import { TestBed, inject } from '@angular/core/testing';

import { ProjectMiniService } from './project-mini.service';

describe('ProjectMiniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectMiniService]
    });
  });

  it('should be created', inject([ProjectMiniService], (service: ProjectMiniService) => {
    expect(service).toBeTruthy();
  }));
});
