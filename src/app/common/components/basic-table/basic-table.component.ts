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

  filter = input<string>();

  tableDataSource = computed(() => {
    const dataSource = new MatTableDataSource<Character | Episode | Location>(this.data() as Character[] | Episode[] | Location[]);
    this.filter() && (dataSource.filter = this.filter()!.trim().toLowerCase());
    return dataSource;
  });

  
  isLoading = input.required<boolean>();
  columns = input.required<TableColumn[]>();
  displayedColumns = computed(() => this.columns().map(column => column.field));
  
  colSpan = computed(()=> this.columns().length + 1);
  resolveField(element: any, field: string, subfield?: string) {
    const value = field.split('.').reduce((prev, curr) => prev && prev[curr], element);
    return subfield ? value?.[subfield] : value;
  }


}
