import { TestBed } from '@angular/core/testing';

import { RevistaServiceService } from './revista-service.service';

describe('RevistaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevistaServiceService = TestBed.get(RevistaServiceService);
    expect(service).toBeTruthy();
  });
});
