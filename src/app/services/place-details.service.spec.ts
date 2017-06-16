import { TestBed, inject } from '@angular/core/testing';

import { PlaceDetailsService } from './place-details.service';

describe('PlaceDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceDetailsService]
    });
  });

  it('should be created', inject([PlaceDetailsService], (service: PlaceDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
