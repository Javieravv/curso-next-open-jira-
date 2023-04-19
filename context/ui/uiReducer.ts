// import { UIState } from "./";

import { UIState } from "./";

type UIActionType =
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close  Sidebar' }
    | { type: 'UI - Set adding entry', payload: boolean }
    | { type: 'UI - Start Drragging' }
    | { type: 'UI - End Drragging' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true
            }
        case 'UI - Close  Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }
        case 'UI - Set adding entry':
            return {
                ...state,
                isAddingEntry: action.payload
            }
        case 'UI - Start Drragging':
            return {
                ...state,
                isDrragging: true
            }
        case 'UI - End Drragging':
            return {
                ...state,
                isDrragging: false
            }
        default:
            return state;
    }
}