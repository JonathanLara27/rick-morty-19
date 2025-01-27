import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharactersComponent { }
