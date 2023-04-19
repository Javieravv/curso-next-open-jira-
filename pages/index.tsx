import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { LayoutMain } from '@/components/layouts'
import { EntryList, NewEntry } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
    return (
        <>
            <LayoutMain title='Home  Open Jira'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardHeader title='Pendientes' />
                            <NewEntry />
                            <EntryList status='pending' />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardHeader title='En progreso' />
                            <EntryList status='in progress' />
                           
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardHeader title='Terminadas' />
                            <EntryList status = 'finished'/>
                        </Card>
                    </Grid>
                </Grid>
            </LayoutMain>
        </>
    )
}
