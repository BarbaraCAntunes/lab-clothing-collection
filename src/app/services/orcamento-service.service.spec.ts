import { TestBed } from '@angular/core/testing';

import { OrcamentoServiceService } from './orcamento-service.service';

describe('OrcamentoServiceService', () => {
  let service: OrcamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrcamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
