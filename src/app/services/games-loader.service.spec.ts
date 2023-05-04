import { TestBed } from '@angular/core/testing';

import { GamesLoaderService } from './games-loader.service';

describe('GamesLoaderService', () => {
  let service: GamesLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
