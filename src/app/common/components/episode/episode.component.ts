import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EpisodeComponent { }
