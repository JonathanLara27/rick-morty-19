import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule} from '@angular/router';
import { TabType } from '../../constants';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

  tabs: WritableSignal<TabType[]> = signal(['characters', 'episodes', 'locations']);

 }
