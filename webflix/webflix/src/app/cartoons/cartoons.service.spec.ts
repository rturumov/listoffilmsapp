import { TestBed } from '@angular/core/testing';
import { CartoonsService } from './cartoons.service';

describe('CartoonsService', () => {
  let service: CartoonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartoonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
