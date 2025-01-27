import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ENDPOINTS } from '../constants';
import {Character, responseCharacter} from '../interfaces/character.interface';
import { InfoPagination, Pagination } from '../interfaces';
import { firstValueFrom, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = ENDPOINTS.CHARACTER;

  private http = inject(HttpClient);

  stateCharacters = signal({
    characters: new Map<number,Character>(),
    isLoading: false,
    info: {
      count: 0,
      pages: 0,
      currentPage: 1,
      next: null,
      prev: null,
    } as InfoPagination
  });

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
    this.setLoading(true);
    await firstValueFrom(timer(150));
    this.http.get<responseCharacter>(`${this.url}?page=${page}`)
    .subscribe({
      next: ({ info, results }: responseCharacter) => {
          this.deleteCharacters();
          results.forEach(character => {
            this.stateCharacters().characters.set(character.id, character);
          });
          this.stateCharacters.set({
            characters: this.stateCharacters().characters,
            info: {
              count: info.count,
              pages: info.pages,
              next: info.next,
              prev: info.prev,
              currentPage: page,
            },
            isLoading: false
          })
        }
      });
  }

  private setLoading(loading: boolean) {
    this.stateCharacters.update((state) => ({
      ...state,
      isLoading: loading
    }));
  }

  private deleteCharacters() {
    this.stateCharacters.update((state) => {
      return {
        ...state,
        characters: new Map<number,Character>()
      }
    });
  }

}
