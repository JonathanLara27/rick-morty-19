import { Location, stateLocation, TableColumn } from "../interfaces";
import { NavigationType } from "./types";

export const locationTableColums : TableColumn[] = [
    {header: 'ID', field: 'id', cellClass: 'text-center'},
    {header: 'Nombre', field: 'name', cellClass: 'text-center'},
    {header: 'Tipo', field: 'type', cellClass: 'text-center'},
    {header: 'Dimensión', field: 'dimension', cellClass: 'text-center'},
    {header: 'Url', field: 'url', cellClass: 'text-center', type: 'url'},
    {header: 'Creado', field: 'created', type: 'dateHora', cellClass: 'text-center'},
];

export const displayedColumnsLocation = locationTableColums.map(column => column.field);

export const INITIAL_STATE_LOCATIONS : stateLocation = {
    locations: new Map<number, Location>(),
    isLoading: false,
    info: {
        count: 0,
        pages: 0,
        currentPage: 1,
        next: null,
        prev: null,
    },
}