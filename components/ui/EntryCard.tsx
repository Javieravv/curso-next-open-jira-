import { UIContext } from "@/context/ui"
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { DragEvent, FC, useContext } from "react"

interface Props {
    entry: Entry
}

export const EntryCard:FC<Props> = ( { entry  }) => {

    const { startDrragging, endDrragging } = useContext(UIContext)

    const onDragStart = ( event: DragEvent) => {
        // todo: modificar estado para indicar que estoy haciendo drag 
        event.dataTransfer.setData('text', entry._id)
        startDrragging()
    }

    const onDragEnd = ( ) => {
        // todo: aquí termina el drag
        endDrragging()
    }

    return (
        <Card
            sx={{ marginBottom: 1 }}
            // Eventos drag and drop 
            draggable= { true }  // habilita el drag 
            onDragStart = { onDragStart }
            onDragEnd={ onDragEnd }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description}</Typography>
                </CardContent>
                <CardActions sx = {{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                    <Typography variant="body2">Hace 25 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
