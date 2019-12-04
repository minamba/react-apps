import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Connexion from './components/Connexion'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'



const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} /> {/* affichage du component 'connexion' quand je suis a la racine du projet */}
            <Route path='/pseudo/:pseudo' component={App} /> {/* affichage dynamique avec une variable pseudo ':pseudo' qui renvoie sur le component app */}
            <Route component={NotFound} /> {/**/}
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
