import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesComponent { }
