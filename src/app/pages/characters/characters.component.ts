import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, computed, inject, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BasicTableComponent } from '../../common/components/basic-table/basic-table.component';
import { CharacterService } from '../../common/services/character.service';
import { Character } from '../../common/interfaces';
import { characterTableColums, displayedColumnsCharacter } from '../../common/constants';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    BasicTableComponent,
    MatPaginatorModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharactersComponent { 

  characterService = inject(CharacterService);
  characters: Signal<Character[]> = computed(() => this.characterService.getFormatedCharacters());
  total= computed(() => this.characterService.stateCharacters().info.count);
  canFirstButton: Signal<boolean> = computed(() => this.characterService.stateCharacters().info.currentPage > 1);
  canPrevButton: Signal<boolean> = computed(() => !!this.characterService.stateCharacters().info.prev);
  canNextButton: Signal<boolean> = computed(() => !!this.characterService.stateCharacters().info.next);
  canLastButton: Signal<boolean> = computed(() => this.characterService.stateCharacters().info.currentPage < this.characterService.stateCharacters().info.pages);
  currentPage: Signal<number> = computed(() => this.characterService.stateCharacters().info.currentPage -1);
  isLoading: Signal<boolean> = computed(() => this.characterService.stateCharacters().isLoading);
  totalPages: Signal<number> = computed(() => this.characterService.stateCharacters().info.pages);

  pageEvent!: PageEvent;

  columns = signal(characterTableColums);
  displayedColumns = signal(displayedColumnsCharacter);

  setPage(page: number) {
    this.characterService.getCharacters({page});
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.setPage(e.pageIndex + 1);
  }

}
