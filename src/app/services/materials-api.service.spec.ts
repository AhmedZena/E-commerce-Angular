import { TestBed } from '@angular/core/testing';

import { MaterialsApiService } from './materials-api.service';

describe('MaterialsApiService', () => {
  let service: MaterialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
