import './App.css'
import { ThemeProvider } from './contexts/theme-context.jsx'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button.jsx'

function App() {
    return (
        <>
            <ThemeProvider>
                <ThemeTogglerButton />
            </ThemeProvider>
        </>
    )
}

export default App;