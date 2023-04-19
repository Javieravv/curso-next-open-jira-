// Proveedor para el contexto 

import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
    children: React.ReactNode;
}

export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDrragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDrragging: false
}

export const UIProvider: FC<Props> = ({ children }) => {
    // manejo dle estado del provider. Se recomienda useReducer
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu        = () => dispatch ( { type: 'UI - Open Sidebar'})
    const closeSideMenu       = () => dispatch ( { type: 'UI - Close  Sidebar'})
    const setIsAddingEntry    = ( value: boolean) => dispatch ( { type: 'UI - Set adding entry', payload: value})
    const startDrragging = () => dispatch ( { type: 'UI - Start Drragging' } )
    const endDrragging = () => dispatch ( { type: 'UI - End Drragging' } )

    return (
        <UIContext.Provider value={{
            ...state,
            // Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDrragging,
            endDrragging
        }}>
            {children}
        </UIContext.Provider>
    )
}