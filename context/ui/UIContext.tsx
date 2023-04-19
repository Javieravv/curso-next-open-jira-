// Contexto para el Ui de la aplicacion.

import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDrragging: boolean;

    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: ( value: boolean) => void;
    startDrragging: () => void;
    endDrragging: () => void;
}

export const UIContext = createContext({} as ContextProps)