import { TestBed, inject } from '@angular/core/testing';

import { PlaceDetailsServiceService } from './place-details-service.service';

describe('PlaceDetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceDetailsServiceService]
    });
  });

  it('should be created', inject([PlaceDetailsServiceService], (service: PlaceDetailsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
