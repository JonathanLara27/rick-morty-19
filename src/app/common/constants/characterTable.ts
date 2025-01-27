import { TableColumn } from "../interfaces/tableColumn.interface";

export const characterTableColums : TableColumn[] = [
    {header: 'ID', field: 'id', cellClass: 'text-center'},
    {header: 'Nombre', field: 'name', cellClass: 'text-center'},
    {header: 'Especie', field: 'species', cellClass: 'text-center'},
    {header: 'Tipo', field: 'type', cellClass: 'text-center'},
    {header: 'Estado', field: 'status', cellClass: 'text-center'},
    {header: 'Genero', field: 'gender', cellClass: 'text-center'},
    {header: 'Origen', field: 'origin', subfield: 'name', cellClass: 'text-center'},
    {header: 'Ubicación', field: 'location', subfield: 'name', cellClass: 'text-center'},
    // {header: 'Episodios', field: 'episode', type: 'array', cellClass: 'text-center'},
    {header: 'Url', field: 'url', cellClass: 'text-center'},
    {header: 'Creado', field: 'created', type: 'dateHora', cellClass: 'text-center'},
]

export const displayedColumnsCharacter = characterTableColums.map(column => column.field);