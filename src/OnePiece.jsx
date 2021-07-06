import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OnePieceJPG from "./photos/One-Piece.jpg";
import AOT from "./AOT"
import JujustuKaisen from "./JujustuKaisen"

export default function OnePiece() {
  return (
    <Fragment>
      <div id="OnePiece-div">
      <h1 id="OnePiece-text">One Piece</h1>

      <img src={OnePieceJPG} alt="One-Piece" id="OnePiece-jpg" />

      <h3 id="OnePiece-text">
        Holy Moley let's get the obvious elephant of the room out of the way, while One Piece is an amazing anime and deserves all the hype it gets,
        it's been 20 years and Luffy and his crewmatees have yet to discover the
        One Piece and become the pirate king. One Peice is almost older then me
        which is absolutely absurd! Now to the fanbase, being a fan of the show
        is cool, but you don't have to put down the other members of the big
        three (Naruto, Bleach & One Piece).{" "}
      </h3>

      <h3 id="OnePiece-text">
        Everytime someone has a slight criticism about the show such as it's way
        too long or gets boring at some parts, One Piece fans always bring up
        Naruto for some odd reason. "Naruto is full of fillers and retcon their
        plot!", that's fine but what does that have to do with One Piece? If One
        Piece is your favorite anime, you're probably a guy that has many long
        stories to tell without any stopping points, which explains One Piece
        800+ episode run with little to no fillers. You're also probably dream
        of being a swordsmen due to being able to deflect every criticism
        someone makes of the show.
      </h3>

      <h5 id="toxic-meter">Toxic Level: 10/10</h5>

      

      
      <Link className="Prev-page" to="/AOT">
        <button id="one-piece-btn" type="button" class="btn btn-outline-danger">Prev Page!</button>
      </Link>

      <Switch>
        <Route exact path="/AOT" component={AOT}></Route>
      </Switch>

      <Link className="Next-page" to="/JujustuKaisen">
        <button id="one-piece-btn" type="button" class="btn btn-outline-danger">Next Page!</button>
      </Link>

      <Switch>
        <Route exact path="/JujustuKaisen" component={JujustuKaisen}></Route>
      </Switch>
      </div>
    </Fragment>
    
  );
}
