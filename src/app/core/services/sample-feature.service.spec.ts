import { TestBed } from '@angular/core/testing';

import { SampleFeatureService } from './sample-feature.service';

describe('SampleFeatureService', () => {
  let service: SampleFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
