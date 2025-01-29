import { WritableSignal } from "@angular/core";

export function applyFilter(filter: WritableSignal<string>, event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  filter.set(filterValue);
}