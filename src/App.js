import React from 'react'
import NavBar from './components/NavBar'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import Aux from './components/Aux'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Products'
import Services from './pages/Services'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'

const App = () => {
    return (
        <Aux>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/products" exact component={Product} />
                    <Route path="/signUp" exact component={SignUp}/>
                </Switch>
                <Footer/>
            </Router>

        </Aux>
    )
}
export default App