import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character, Status, StatusStyle } from '../../interfaces';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCharacterComponent { 

  character = input.required<Character>()

  getStatusStyle(status: Status): string {
    return StatusStyle[status as keyof typeof StatusStyle] ?? '';
  }

}
