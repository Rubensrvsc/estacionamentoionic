import { TestBed } from '@angular/core/testing';

import { ProvRegistrarService } from './prov-registrar.service';

describe('ProvRegistrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvRegistrarService = TestBed.get(ProvRegistrarService);
    expect(service).toBeTruthy();
  });
});
