import { Fragment } from "react";
import { Route, Switch, Link, Router } from "react-router-dom";
import Naruto from "./Naruto";
import jpg from "./photos/MHA.jpg";
import DBZ from "./DBZ"

export default function MHA() {
  return (
    <Fragment>
      <div id="MHA-background">
      <h1 id="title">My Hero Academia</h1>

      <img src={jpg} alt="My Hero Academia" id="MHA" />

      <h3 id="MHA-text">
        If My Hero Academia is your favorite anime you probably already think
        it's the GOAT anime. Well I hate to break it to you but it's not, at
        least not yet. You also have an obsession with proving why it is the
        best amongst your friends in debates, even if you can't acknowledge the
        flaws that the show has.You might also be new to anime and just simply
        want to watch a show that's easy to follow and that's one of the biggest
        perks to why MY Hero is one of the most popular anime out currently. At
        the end of the day, it's not your fault that some of the fanbase is
        toxic, unless you are one of the toxic fans!
      </h3>

      <h5 id="MHA-toxic">Toxic Level: 9/10</h5>

      <Link className="prev-page" to="/Naruto">
      <button type="button" class="btn btn-outline-danger" id="MHA-button">Prev Page</button>
      </Link>

      <Switch>
        <Route exact path="/Naruto" component={Naruto}></Route>
      </Switch>

      <Link className="Next-page" to="/DBZ">
      <button type="button" class="btn btn-outline-danger" >Next Page</button>
      </Link>

      <Switch>
        <Route exact path="/DBZ" component={DBZ}></Route>
      </Switch>



      </div>
    </Fragment>
  );
}
