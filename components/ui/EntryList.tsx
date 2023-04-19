import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "@/interfaces"
import { DragEvent, FC, useContext, useMemo } from "react"
import { EntriesContext } from "@/context/entries"
import { UIContext } from "@/context/ui"

import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus
}

export const EntryList:FC<Props> = ( { status } ) => {
    // Aquí haremos drop
    console.log ('EL ESTATUS QUE SE RECIBE ES', status)
    const { entries, updateEntry } = useContext(EntriesContext)
    const { isDrragging, endDrragging } = useContext(UIContext)
    const entriesByStatus = useMemo( () =>  entries.filter ( entry => entry.status === status), [ entries ] )

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find( e => e._id === id)!;
        entry.status = status
        updateEntry ( entry )
        endDrragging ()
    }

    return (
        <div 
            onDrop=  { onDropEntry }
            onDragOver={ allowDrop }
            className= { isDrragging ? styles.dragging : '' }
        >
            <Paper sx={{
                height: 'calc(100vh - 150px)',
                overflow: 'scroll',
                backgroundColor: 'transparent',
                padding: 1
                
            }} >
                { /**Cambioará si está hacienod o no drag and drop */}

                <List sx={{ opacity: isDrragging ? 0.4 : 1, transition: 'all .3s'}}>
                    {
                        entriesByStatus.map ( entry => (
                            <EntryCard key = { entry._id } entry = { entry } />
                        ))
                    }
                    
                </List>
            </Paper>
        </div>
    )
}
