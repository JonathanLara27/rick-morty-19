import { Character, Episode, Location } from "../interfaces";

export const mapFactory = {
    characters: () => new Map<number, Character>(),
    episodes: () => new Map<number, Episode>(),
    locations: () => new Map<number, Location>(),
};