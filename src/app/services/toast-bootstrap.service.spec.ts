import { TestBed } from '@angular/core/testing';

import { ToastBootstrapService } from './toast-bootstrap.service';

describe('ToastBootstrapService', () => {
  let service: ToastBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
