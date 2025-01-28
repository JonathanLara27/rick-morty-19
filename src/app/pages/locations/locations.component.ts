import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BasicTableComponent } from '../../common/components/basic-table/basic-table.component';
import { LocationService } from '../../common/services/location.service';
import { locationTableColums, NavigationType } from '../../common/constants';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    BasicTableComponent,
    MatPaginatorModule,
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LocationsComponent { 

  locationService = inject(LocationService);

  locations = computed(() => this.locationService.getFormatedLocations());
  total = computed(() => this.locationService.stateLocations().info.count);
  currentPage = computed(() => this.locationService.stateLocations().info.currentPage -1);
  isLoading = computed(() => this.locationService.stateLocations().isLoading);

  columns = signal(locationTableColums);
  displayedColumns = signal(locationTableColums);

  //obtenemos el paginator
  paginator = viewChild(MatPaginator);


  private setPage(page: number) { 
    this.locationService.getLocations({page});
  }

  handlePageEvent(e: PageEvent) {
    this.setPage(e.pageIndex + 1);
  }

}
