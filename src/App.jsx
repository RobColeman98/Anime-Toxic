import React, {useState} from 'react'
import Home from "./Home"
import Naruto from "./Naruto"
import MHA from "./MHA"
import DBZ from "./DBZ"
import AOT from "./AOT"
import OnePiece from "./OnePiece"
import JujustuKaisen from "./JujustuKaisen"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App(){
    return(
       <Router>

           <Switch>
               <Route exact path="/" component={Home}></Route>
                <Route exact path="/Naruto" component={Naruto}></Route>
                <Route exact path ="/MHA" component={MHA}></Route>
                <Route exact path ="/DBZ" component={DBZ}></Route>
                <Route exact path ="/AOT" component={AOT}></Route>
                <Route exact path ="/OnePiece" component={OnePiece}></Route>
                <Route exact path ="/JujustuKaisen" component={JujustuKaisen}></Route>
           </Switch>
       </Router>
    )
}
