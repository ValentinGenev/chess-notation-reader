import { TestBed } from '@angular/core/testing';
import { NotationSelectService } from './notation-select.service';

describe('NotationSelectService', () => {
  let service: NotationSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotationSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
