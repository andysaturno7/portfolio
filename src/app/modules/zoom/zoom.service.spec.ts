import { TestBed } from '@angular/core/testing';

import { ZoomService } from '../../_services/zoom.service';

describe('ZoomService', () => {
  let service: ZoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
