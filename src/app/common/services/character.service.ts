import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { ENDPOINTS, INITIAL_STATE_CHARACTERS, NavigationType } from '../constants';
import { responseCharacter, stateCharacter} from '../interfaces/character.interface';
import { InfoPagination, Pagination } from '../interfaces';
import { firstValueFrom, timer } from 'rxjs';
import { setLoading, setNavigationType } from '../utils';
import { resetSignal } from '../utils/resetSignal';
import { updatePagination } from '../utils/updatePagination';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = ENDPOINTS.CHARACTER;

  private http = inject(HttpClient);

  stateCharacters: WritableSignal<stateCharacter> = signal(INITIAL_STATE_CHARACTERS);

  getFormatedCharacters() {
    return Array.from(this.stateCharacters().characters.values());
  }

  getCharacterById(id: number) {
    return this.stateCharacters().characters.get(id);
  }

  constructor() {
    this.getCharacters({page: 1});
   }

  async getCharacters({page}: Pagination) {
    setLoading(this.stateCharacters,true);
    await firstValueFrom(timer(150));
    this.http.get<responseCharacter>(`${this.url}?page=${page}`)
    .subscribe({
      next: ({ info, results }: responseCharacter) => {
          const { count, next, pages, prev } = info
          resetSignal(this.stateCharacters, 'characters');
          results.forEach(character => {
            this.stateCharacters().characters.set(character.id, character);
          });
          const newInfo : InfoPagination = {count,next,pages,prev,currentPage: page}
          updatePagination(this.stateCharacters, newInfo);
        }
      });
  }

  setNavigationType(navigationType: NavigationType) {
    setNavigationType(this.stateCharacters, navigationType);
  }

}
