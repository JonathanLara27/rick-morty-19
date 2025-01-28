import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { NavigationType, navigationTypes } from '../../constants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation-pages',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './navigation-pages.component.html',
  styleUrl: './navigation-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPagesComponent {

  navigationType = input.required<NavigationType>()

  navigationTypes = signal(navigationTypes)

  titleButton = new Map<NavigationType, string>([
    ['table' as NavigationType, 'Visualizar Tabla'],
    ['galery' as NavigationType, 'Visualizar Galeria'],
  ]);

  getButtonTitle(item: NavigationType){
    return this.titleButton.get(item)
  }

  navigationTypeSelected = output<NavigationType>()

  setNavigationType(navigationType: NavigationType) {
    this.navigationTypeSelected.emit(navigationType)
  }

 }
