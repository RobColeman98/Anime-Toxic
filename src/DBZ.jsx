import { Fragment } from "react";
import { Route, Switch, Link, Router } from "react-router-dom";
import jpg from "./photos/DBZ.jpg";
import MHA from "./MHA";
import AOT from "./AOT"

export default function DBZ() {
  return (
  
      <div id="DBZ-Div">
      <h1 id="DBZ-Title">Dragon Ball Z </h1>

      <img src={jpg} alt="Dragon Ball Z" id="DBZ" />

      <h3 id="DBZ-Text">
        You are either a seasoned vet in the anime community or someone who
        picks an anime that eveyone loves if Dragon Ball Z is your favorite. You
        appreciate both the old and current animes, but always tend to come back
        to good ole DBZ when you want to rewatch a series.
      </h3>

      <h3 id="DBZ-Text">
        You also probably get teased a lot when someone mentions GT because
        let's all be honest, GT was horrible. People also question you a lot on who was a better character between Goku and Vegeta. You may or may not be a fan of
        Super, but you also understand that there will never be a timeless
        classic like Dragon ball Z.
      </h3>

      <p></p>
      
      <h5 id="DBZ-Toxic">Toxic Level: 3/10</h5>

      <Link className="prev-page" to="/MHA">
      <button type="button" class="btn btn-outline-danger" id="DBZ-BTN">Next Page</button>
      </Link>

      <Switch>
        <Route exact path="/MHA" component={MHA}></Route>
      </Switch>

      <Link className="Next-page" to="/AOT">
      <button type="button" class="btn btn-outline-danger" id="DBZ-BTN">Next Page</button>
      </Link>

      <Switch>
        <Route exact path="/AOT" component={AOT}></Route>
      </Switch>

      
      </div>
    
  );
}
