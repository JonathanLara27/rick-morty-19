import { Location, stateLocation, TableColumn } from "../interfaces";

export const locationTableColums : TableColumn[] = [
    {header: 'ID', field: 'id'},
    {header: 'Nombre', field: 'name'},
    {header: 'Tipo', field: 'type'},
    {header: 'Dimensión', field: 'dimension'},
    {header: 'Url', field: 'url', cellClass: 'text-center', type: 'url', headerClass: 'text-center'},
    { header: 'Creado', field: 'created', type: 'datetime', cellClass: 'text-center', headerClass: 'text-center'},
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