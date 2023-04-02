import { TestBed } from '@angular/core/testing';

import { ClothingModelServiceService } from './clothing-model-service.service';

describe('ClothingModelServiceService', () => {
  let service: ClothingModelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingModelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
