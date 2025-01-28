import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, computed, inject, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BasicTableComponent } from '../../common/components/basic-table/basic-table.component';
import { CharacterService } from '../../common/services/character.service';
import { Character } from '../../common/interfaces';
import { NavigationType, characterTableColums, displayedColumnsCharacter } from '../../common/constants';
import { NavigationPagesComponent } from '../../common/components/navigation-pages/navigation-pages.component';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    BasicTableComponent,
    MatPaginatorModule,
    NavigationPagesComponent,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharactersComponent { 

  characterService = inject(CharacterService);
  characters: Signal<Character[]> = computed(() => this.characterService.getFormatedCharacters());
  total= computed(() => this.characterService.stateCharacters().info.count);
  currentPage: Signal<number> = computed(() => this.characterService.stateCharacters().info.currentPage -1);
  isLoading: Signal<boolean> = computed(() => this.characterService.stateCharacters().isLoading);
  totalPages: Signal<number> = computed(() => this.characterService.stateCharacters().info.pages);

  navigationType: Signal<NavigationType> = computed(() => this.characterService.stateCharacters().navigationType);

  columns = signal(characterTableColums);
  displayedColumns = signal(displayedColumnsCharacter);

  private setPage(page: number) {
    this.characterService.getCharacters({page});
  }

  handlePageEvent(e: PageEvent) {
    this.setPage(e.pageIndex + 1);
  }

  setNavigationType(navigationType: NavigationType) {
    this.characterService.setNavigationType(navigationType);
  }

}
