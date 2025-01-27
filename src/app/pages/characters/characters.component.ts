import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, computed, inject } from '@angular/core';
import { CharacterService } from '../../common/services/character.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Character } from '../../common/interfaces';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharactersComponent { 

  characterService = inject(CharacterService);
  characters: Signal<Character[]> = computed(() => this.characterService.getFormatedCharacters());
  canNextButton: Signal<boolean> = computed(() => !!this.characterService.stateCharacters().info.next);
  canPrevButton: Signal<boolean> = computed(() => !!this.characterService.stateCharacters().info.prev);
  currentPage: Signal<number> = computed(() => this.characterService.stateCharacters().info.currentPage);
  isLoading: Signal<boolean> = computed(() => this.characterService.stateCharacters().isLoading);

  setPage(page: number) {
    this.characterService.getCharacters({page});
  }

}
