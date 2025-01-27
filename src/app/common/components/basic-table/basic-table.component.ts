import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTableComponent { }
