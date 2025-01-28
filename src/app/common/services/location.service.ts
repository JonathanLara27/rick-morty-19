import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ENDPOINTS, INITIAL_STATE_LOCATIONS, NavigationType } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Pagination, responseLocation, stateLocation } from '../interfaces';
import { firstValueFrom, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url = ENDPOINTS.LOCATION;

  private readonly http = inject(HttpClient);

  stateLocations : WritableSignal<stateLocation> = signal(INITIAL_STATE_LOCATIONS);

  getFormatedLocations() {
    return Array.from(this.stateLocations().locations.values());
  }

  getLocationById(id: number) {
    return this.stateLocations().locations.get(id);
  }

  constructor() { 
    this.getLocations({page: 1});
  }

  async getLocations({page}: Pagination) {
    this.setLoading(true);
    await firstValueFrom(timer(150));
    this.http.get<responseLocation>(`${this.url}?page=${page}`)
    .subscribe({
      next: ({ info, results }: responseLocation) => {
          this.deleteLocations();
          results.forEach(location => {
            this.stateLocations().locations.set(location.id, location);
          });
          this.stateLocations.update((state) => ({
            ...state,
            locations: this.stateLocations().locations,
            info: {
              count: info.count,
              pages: info.pages,
              next: info.next,
              prev: info.prev,
              currentPage: page,
            },
            isLoading: false,
          }));
        }
    });
  }
  
  private setLoading(loading: boolean) {
      this.stateLocations.update((state) => ({
        ...state,
        isLoading: loading
      }));
  }

  private deleteLocations() {
    this.stateLocations.update((state) => ({
      ...state,
      locations: new Map()
    }));
  }

  setNavigationType(navigationType: NavigationType) {
    this.stateLocations.update((state) => ({
      ...state,
      navigationType
    }));
  }
  
}
