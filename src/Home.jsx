import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Naruto from "./Naruto"
import AnimePoster from "./photos/Anime-Poster.jpg"

export default function Home() {
  return (
    <Fragment>
      <div id="intro-div">
      <h1 id="Intro">What your favorite Anime Says about you!</h1>

        <img src={AnimePoster} alt="" id="Anime-Poster"/>
      <h3 id="Intro">
        Nowadays there's a ton of different Anime out there to be enjoyed, as
        well as many different platforms for viewing. Wether you're old school,
        new school, or someone just getting started, you can surely enjoy many
        genres of anime. However with different anime comes different fans,
        ranging from humble and welcoming to just down right insane. Today we
        gonna look into what your favorite anime says about you with some of the
        most popular animes you can watch and of course, I'll be throwing in some friendly banter shots just to ruffle some feathers! 
      </h3>

    
        <Link className="next-page" to="./Naruto">
        <button type="button" class="btn btn-outline-info">Next Page</button>
        </Link>

          <Switch>
            <Route exact path="/Naruto" component={Naruto}></Route>
          </Switch>
          </div>
    </Fragment>
  );
}
