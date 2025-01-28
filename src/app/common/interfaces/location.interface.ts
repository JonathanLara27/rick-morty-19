import { NavigationType } from "../constants";
import { InfoPagination } from "./info.interface";

export interface responseLocation {
    info: InfoPagination;
    results: Location[];
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
}

export interface stateLocation {
    locations: Map<number, Location>;
    isLoading: boolean;
    info: InfoPagination;
    navigationType: NavigationType;
}