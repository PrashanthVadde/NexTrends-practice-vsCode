import { BrowserRouter, Switch, Route } from "react-router-dom"

import LoginForm from "./Components/LoginForm"
import Home from "./Components/Home"
import { NotFound } from "./Components/NotFound"


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" Component={LoginForm} />
            <Route exact path="/" Component={Home} />
            <Route path="*" Component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App