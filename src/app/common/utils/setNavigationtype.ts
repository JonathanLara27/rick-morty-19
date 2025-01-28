import { WritableSignal } from "@angular/core";
import { stateCharacter, stateEpisode, stateLocation } from "../interfaces";
import { NavigationType } from "../constants";

export function setNavigationType (signal: WritableSignal<stateEpisode | stateCharacter | stateLocation>, navigationType: NavigationType) {
    signal.update((state) => ({
        ...state,
        navigationType
    }));
}