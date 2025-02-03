import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ENDPOINTS, INITIAL_STATE_LOCATIONS } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Location, Pagination, responseLocation, stateLocation } from '../interfaces';
import { firstValueFrom, timer } from 'rxjs';
import { setLoading } from '../utils';
import { resetSignal } from '../utils/resetSignal';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url = ENDPOINTS.LOCATION;

  private readonly http = inject(HttpClient);

  stateLocations : WritableSignal<stateLocation> = signal(INITIAL_STATE_LOCATIONS);

  getFormatedLocations(): Location[] {
    return Array.from(this.stateLocations().locations.values());
  }

  getLocationById(id: number) {
    return this.stateLocations().locations.get(id);
  }

  constructor() { 
    this.getLocations({page: 1});
  }

  async getLocations({page}: Pagination) {
    setLoading(this.stateLocations,true);
    await firstValueFrom(timer(150));
    this.http.get<responseLocation>(`${this.url}?page=${page}`)
    .subscribe({
      next: ({ info, results }: responseLocation) => {
          const {count,next,pages,prev} = info;
          resetSignal(this.stateLocations, 'locations');
          results.forEach(location => {
            this.stateLocations().locations.set(location.id, location);
          });
          this.stateLocations.update((state) => ({
            ...state,
            locations: this.stateLocations().locations,
            info: {
              count,
              next,
              pages,
              prev,
              currentPage: page,
            },
            isLoading: false,
          }));
        }
    });
  }
  
}
