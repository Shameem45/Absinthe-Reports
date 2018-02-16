import { TestBed, inject } from '@angular/core/testing';
import { TaskdataService } from './taskdata.service';

describe('TaskdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskdataService]
    });
  });

  it('should be created', inject([TaskdataService], (service: TaskdataService) => {
    expect(service).toBeTruthy();
  }));
});
