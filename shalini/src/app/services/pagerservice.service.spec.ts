import { TestBed, inject } from '@angular/core/testing';

import { PagerserviceService } from './pagerservice.service';

describe('PagerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagerserviceService]
    });
  });

  it('should be created', inject([PagerserviceService], (service: PagerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
