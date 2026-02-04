import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calculadora from "../views/Calculadora/index.js"

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<Calculadora/>}/>
            </Routes>
        </Router>
    )
}