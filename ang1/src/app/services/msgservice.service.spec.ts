import { TestBed } from '@angular/core/testing';

import { MsgserviceService } from './msgservice.service';

describe('MsgserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsgserviceService = TestBed.get(MsgserviceService);
    expect(service).toBeTruthy();
  });
});
