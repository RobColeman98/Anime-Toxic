import { Fragment } from "react";
import { Route, Switch, Link, Router } from "react-router-dom";
import jpg from "./photos/Jujutsu-Kaisen.jpg";
import Home from "./Home"
import OnePiece from "./OnePiece"

export default function JujustuKaisen() {
  return (
    <Fragment>
      <div id="JJK-Div">
      <h1 id="JJK-Title">Jujustu Kaisen</h1>

      <img src={jpg} alt="Jujust-Kaisen" id="JJK" />

      <h2 id="JJK-Text">
        Jujustu Kaisen is a good anime, but not a great anime. It's great for
        those who like a simple story to follow but mainly wants action. However
        to all the people riding the hype train, I think we need to pump the
        brakes for a second. There's been plenty of animes that had great first
        seasons and got progressively worse, Sword Art Online and Seven Deadly
        Sins being a prime example. If Jujustu Kaisen is your favorite anime,
        then you're someone who likes to hype everything has soon as it gains
        traction but immediately leaves once the hype goes down.
      </h2>

      <h5 id="JJK-Toxic">Toxic Level: 7/10</h5>

      <Link className="Prev-page" to="/OnePiece">
        <button type="button" id="JJK-Btn" className="btn btn-outline-warning">Prev Page!</button>
      </Link>

      <Switch>
        <Route exact path="/AOT" component={OnePiece}></Route>
      </Switch>

      <Link className="Next-page" to="/">
        <button type="button" id="JJK-Btn" className="btn btn-outline-warning">Go Home!</button>
      </Link>

      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      </div>
    </Fragment>
  );
}
