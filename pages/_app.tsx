import { EntriesProvider } from '@/context/entries'
import { UIProvider } from '@/context/ui'
import '@/styles/globals.css'
import { darkTheme, lighTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

/** ThemeProvider es para el tema claro u oscuro
 * CssBaseLine es para resetear los temas que se deben manejar y así aplique el tema y la fuente de la aplicación.
*/

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <EntriesProvider>
            <UIProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UIProvider>
        </EntriesProvider>
    )
}
