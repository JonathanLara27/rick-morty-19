import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { ENDPOINTS, NavigationType } from '../constants';
import {Character, responseCharacter, stateCharacter} from '../interfaces/character.interface';
import { Pagination } from '../interfaces';
import { firstValueFrom, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = ENDPOINTS.CHARACTER;

  private http = inject(HttpClient);

  stateCharacters: WritableSignal<stateCharacter> = signal({
    characters: new Map<number,Character>(),
    isLoading: false,
    navigationType: 'table' as NavigationType,
    info: {
      count: 0,
      pages: 0,
      currentPage: 1,
      next: null,
      prev: null,
    }
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
          this.stateCharacters.update((state) => ({
            ...state,
            characters: this.stateCharacters().characters,
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

  setNavigationType(navigationType: NavigationType) {
    this.stateCharacters.update((state) => ({
      ...state,
      navigationType
    }));
  }

}
