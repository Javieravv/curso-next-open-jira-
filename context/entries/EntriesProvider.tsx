import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props {
    children: React.ReactNode;
}

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente - Primera descripción',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En progreso Segunda descripción',
            status: 'in progress',
            createdAt: Date.now() - 950000
        },
        {
            _id: uuidv4(),
            description: 'Finalizada Tercer descripción',
            status: 'finished',
            createdAt: Date.now() - 250000
        },
        {
            _id: uuidv4(),
            description: 'Pendiente - Cuarta  descripción',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Finalizada Segunda  descripción',
            status: 'finished',
            createdAt: Date.now() - 250000
        },
    ]
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    // manejo dle estado del provider. Se recomienda useReducer
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch ( { type: '[Entry] - Add Entry', payload: newEntry } )
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch ( { type: '[Entry] - Entry Updated', payload: entry} )
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}