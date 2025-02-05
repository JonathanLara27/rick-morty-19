import { WritableSignal } from "@angular/core"
import { InfoPagination, stateCharacter, stateEpisode, stateLocation } from "../interfaces"

//nombre para un método que actualice la paginación y un isLoading
export const updatePagination = (state: WritableSignal<stateCharacter | stateEpisode | stateLocation>, info: InfoPagination ) => {
    state.update((state) => ({
        ...state,
        info,
        isLoading: false,
    }));
    
}