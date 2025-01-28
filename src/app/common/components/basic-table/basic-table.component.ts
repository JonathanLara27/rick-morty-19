import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Character, Episode, Location } from '../../interfaces';
import { TableColumn } from '../../interfaces/tableColumn.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTableComponent { 

  data = input.required<Character[] | Episode[] | Location[]>();
  tableDataSource = computed(() => {
    return new MatTableDataSource<Character | Episode | Location >(this.data() as Character[] | Episode[] | Location[]);
  });
  isLoading = input.required<boolean>();
  columns = input.required<TableColumn[]>();
  displayedColumns = computed(() => this.columns().map(column => column.field));

  resolveField(element: any, field: string, subfield?: string) {
    const value = field.split('.').reduce((prev, curr) => prev && prev[curr], element);
    return subfield ? value?.[subfield] : value;
  }

}
