import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LocationsComponent { }
