import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginForm from "./Components/LoginForm"
import Home from "./Components/Home"
import { NotFound } from "./Components/NotFound"


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" Component={LoginForm} />
            <Route exact path="/" Component={Home} />
            <Route path="*" Component={NotFound} />
        </Routes>
    </BrowserRouter>
)

export default App