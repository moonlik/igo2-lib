import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { RequestService, MessageService } from '../../core';

import { CapabilitiesService } from './capabilities.service';

describe('CapabilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        RequestService,
        MessageService,
        CapabilitiesService
      ]
    });
  });

  it('should ...', inject([CapabilitiesService], (service: CapabilitiesService) => {
    expect(service).toBeTruthy();
  }));
});