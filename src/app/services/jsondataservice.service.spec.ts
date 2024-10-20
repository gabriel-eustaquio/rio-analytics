import { TestBed } from '@angular/core/testing';

import { JsondataserviceService } from './jsondataservice.service';

describe('JsondataserviceService', () => {
  let service: JsondataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsondataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
