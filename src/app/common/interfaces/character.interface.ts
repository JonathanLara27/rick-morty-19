import { InfoPagination } from ".";
import { NavigationType } from "../constants";

export interface responseCharacter {
    info: InfoPagination;
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface stateCharacter {
    characters: Map<number, Character>;
    isLoading: boolean;
    navigationType: NavigationType;
    info: InfoPagination;
}

enum Gender {
    Female = "Female",
    Male = "Male",
    Genderless= "Genderless",
    Unknown = "unknown",
}

interface Origin {
    name: string;
    url: string;
}

enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export enum StatusStyle {
    Alive = "alive",
    Dead = "dead",
    Unknown = "unknown",
}