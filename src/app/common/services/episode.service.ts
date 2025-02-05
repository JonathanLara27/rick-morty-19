import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { ENDPOINTS, INITIAL_STATE_EPISODES } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Episode, InfoPagination, Pagination, responseEpisode, stateEpisode } from '../interfaces';
import { setLoading } from '../utils';
import { resetSignal } from '../utils/resetSignal';
import { firstValueFrom, timer } from 'rxjs';
import { updatePagination } from '../utils/updatePagination';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private url = ENDPOINTS.EPISODE;

  private http = inject(HttpClient);
  
  stateEpisodes: WritableSignal<stateEpisode> = signal(INITIAL_STATE_EPISODES);

  getFormatedEpisodes() : Array<Episode> {
    return Array.from(this.stateEpisodes().episodes.values());
  }

  getEpisodeById(id: number): Episode | undefined {
    return this.stateEpisodes().episodes.get(id);
  }

  constructor() {
    this.getEpisodes({page: 1});
   }

  async getEpisodes({ page }: Pagination) {
    setLoading(this.stateEpisodes, true);
    await firstValueFrom(timer(150));
    this.http.get<responseEpisode>(`${this.url}?page=${page}`)
    .subscribe({
      next: ({info,results}:responseEpisode) => {
        const {count,next,pages,prev} = info
        resetSignal(this.stateEpisodes, 'episodes');
        results.forEach(episode => {
          this.stateEpisodes().episodes.set(episode.id, episode);
        });
        const newInfo: InfoPagination = {count,next,pages,prev,currentPage: page}
        updatePagination(this.stateEpisodes, newInfo);
      }
    });
  }

}
