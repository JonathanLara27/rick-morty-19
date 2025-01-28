import { WritableSignal } from "@angular/core";
import { stateCharacter, stateEpisode, stateLocation } from "../interfaces";

export function setLoading (signal: WritableSignal<stateCharacter | stateEpisode | stateLocation>, loading: boolean) {
  signal.update((state) => ({
    ...state,
    isLoading: loading
  }));
}