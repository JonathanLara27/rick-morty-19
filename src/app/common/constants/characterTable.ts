import { Character, stateCharacter } from "../interfaces";
import { TableColumn } from "../interfaces/tableColumn.interface";
import { NavigationType } from "./types";

export const characterTableColums : TableColumn[] = [
    {header: 'ID', field: 'id'},
    {header: 'Nombre', field: 'name'},
    {header: 'Especie', field: 'species'},
    {header: 'Tipo', field: 'type'},
    {header: 'Estado', field: 'status'},
    {header: 'Genero', field: 'gender'},
    {header: 'Origen', field: 'origin', subfield: 'name'},
    {header: 'Ubicación', field: 'location', subfield: 'name'},
    // {header: 'Episodios', field: 'episode', type: 'array', cellClass: 'text-center'},
    {header: 'Url', field: 'url', cellClass: 'text-center', headerClass: 'text-center', type: 'url'},
    { header: 'Creado', field: 'created', type: 'datetime', cellClass: 'text-center', headerClass: 'text-center' },
]

export const displayedColumnsCharacter = characterTableColums.map(column => column.field);

export const INITIAL_STATE_CHARACTERS: stateCharacter = {
    characters: new Map<number, Character>(),
    isLoading: false,
    navigationType: 'table' as NavigationType,
    info: {
        count: 0,
        pages: 0,
        currentPage: 1,
        next: null,
        prev: null,
    }
}