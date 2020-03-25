import { TestBed } from '@angular/core/testing';

import { ObtemNomePropService } from './obtem-nome-prop.service';

describe('ObtemNomePropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtemNomePropService = TestBed.get(ObtemNomePropService);
    expect(service).toBeTruthy();
  });
});
