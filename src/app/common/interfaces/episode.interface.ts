import { InfoPagination } from ".";
import { NavigationType } from "../constants";

export interface responseEpisode {
    info: InfoPagination;
    results: Episode[];
}
export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface stateEpisode {
    episodes: Map<number, Episode>;
    isLoading: boolean;
    info: InfoPagination;
}