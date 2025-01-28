import { WritableSignal } from "@angular/core";
import { stateCharacter, stateEpisode, stateLocation } from "../interfaces";
import { mapFactory } from "../constants";

export function resetSignal(
    signal: WritableSignal<stateCharacter | stateEpisode | stateLocation>,
    typeState: 'characters' | 'episodes' | 'locations'
): void {
    signal.update((state) => ({
        ...state,
        [typeState]: mapFactory[typeState](),
    }));
}

