import './App.css'
import { ThemeProvider } from './contexts/theme-context.jsx'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button.jsx'
import { Card } from './components/card/card.jsx';

function App() {
    return (
        <>
            <ThemeProvider>
                <Card />
                <ThemeTogglerButton />
            </ThemeProvider>
        </>
    )
}

export default App;