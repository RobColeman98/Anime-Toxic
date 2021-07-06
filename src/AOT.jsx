import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jpg from "./photos/AOT.jpg";
import DBZ from "./DBZ";
import OnePiece from "./OnePiece";

export default function AOT() {
  return (
    
      <div id="AOT-div">
        <h1 id="AOT-text">Attack on Titan</h1>
        <img src={jpg} alt="Attack-On-Titan" id="AOT" />

        <h2 id="AOT-text">
          You're probably someone who likes a lot of edgy and hardcore video
          games or war films. Although your anime did have one of the best first
          seasons of all time, let's also talk about how boring and slow paced
          the second season was. Overall you're a pretty chill individual and
          just like what you like.
        </h2>

        <p id="AOT-toxic">Toxic Level: 5/10</p>
    

      <Link className="prev-page" to="/DBZ">
        <button type="button" id="AOT-btn" className="btn btn-outline-dark">Prev Page!</button>
      </Link>

      <Switch>
        <Route exact path="/DBZ" component={DBZ}></Route>
      </Switch>

      <Link className="Next-page" to="/OnePiece">
        <button type="button" id="AOT-btn" className="btn btn-outline-dark">Next Page!</button>
      </Link>

      <Switch>
        <Route exact path="/OnePiece" component={OnePiece}></Route>
      </Switch>
      </div>
    
  );
}
