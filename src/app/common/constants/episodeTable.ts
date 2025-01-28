import { Episode, TableColumn, stateEpisode } from "../interfaces";

export const episodeTableColumns : TableColumn[] = [
    {header: 'ID', field: 'id', },
    {header: 'Nombre', field: 'name' },
    {header: 'Fecha de emisión', field: 'air_date', cellClass: 'text-center',headerClass: 'text-center'},
    {header: 'Episodio', field: 'episode', cellClass: 'text-center',headerClass: 'text-center'},
    {header: 'Url', field: 'url', cellClass: 'text-center',headerClass: 'text-center', type: 'url'},
    {header: 'Creado', field: 'created', type: 'dateHora', cellClass: 'text-center',headerClass: 'text-center'},
]

export const displayedColumnsEpisode = episodeTableColumns.map(column => column.field);

export const INITIAL_STATE_EPISODES: stateEpisode = {
    episodes: new Map<number,Episode>(),
    isLoading: false,
    info: {
        count: 0,
        pages: 0,
        currentPage: 1,
        next: null,
        prev: null,
    }
};