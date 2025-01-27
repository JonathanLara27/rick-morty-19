import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, computed, inject, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BasicTableComponent } from '../../common/components/basic-table/basic-table.component';
import { NavigationPagesComponent } from '../../common/components/navigation-pages/navigation-pages.component';
import { EpisodeService } from '../../common/services/episode.service'
import { Episode } from '../../common/interfaces';
import { NavigationType, displayedColumnsEpisode, episodeTableColumns } from '../../common/constants';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    BasicTableComponent,
    MatPaginatorModule,
    NavigationPagesComponent,
  ],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EpisodesComponent {
  
  episodeService = inject(EpisodeService);
  episodes :Signal<Episode[]> = computed(() => this.episodeService.getFormatedEpisodes());
  total = computed(() => this.episodeService.stateEpisodes().info.count);
  currentPage: Signal<number> = computed(() => this.episodeService.stateEpisodes().info.currentPage -1);
  isLoading: Signal<boolean> = computed(() => this.episodeService.stateEpisodes().isLoading);
  totalPages: Signal<number> = computed(() => this.episodeService.stateEpisodes().info.pages);

  navigationType: Signal<NavigationType> = computed(() => this.episodeService.stateEpisodes().navigationType);

  columns = signal(episodeTableColumns);
  displayedColumns = signal(displayedColumnsEpisode);

  private setPage(page: number) {
    this.episodeService.getEpisodes({page});
  }

  handlePageEvent(e: PageEvent) {
    this.setPage(e.pageIndex + 1);
  }

  setNavigationType(navigationType: NavigationType) {
    this.episodeService.setNavigationType(navigationType);
  }

}
