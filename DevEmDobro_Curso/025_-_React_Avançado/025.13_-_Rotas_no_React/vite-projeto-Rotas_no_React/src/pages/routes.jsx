import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from "./posts.jsx"

const AppRoutes = () => (
    // return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Posts />} />
            </Routes>
        </BrowserRouter>
    // )
)

export { AppRoutes}