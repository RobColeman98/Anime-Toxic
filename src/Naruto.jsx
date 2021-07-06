import { Fragment } from "react";
import { Route, Switch, Link, Router } from "react-router-dom";
import Home from "./Home";
import jpg from "./photos/Naruto-Cover.jpg";
import MHA from "./MHA";

export default function Naruto() {
  return (
    
    <div id="Naruto-Background">
      
      <h1 id="Naruto-title">Naruto</h1>
      <img src={jpg} alt="Naruto-Cover" id="Naruto-cover" />
      <h3 id="naruto-text">
        If Naruto is your favorite anime, then you're probably someone who can
        never get to the point in conversations, just like how Naruto can't get
        to the point of the plot with all of their fillers. You also tend to
        hate Boruto soley because you think it's killing the legacy of Naruto.
      </h3>

      <p></p>

      <h3 id="naruto-text">
        On A positive note, you are more than likely extremely loyal due to
        being able to watch over 700 episodes from both part one of Naruro and
        Shippuden combined. You also have a strong will and always belive in
        yourself no matter what!
      </h3>

      <h5>Toxic Level: 6/10</h5>

      <Link className="prev-page" to="/">
      <button type="button" class="btn btn-outline-dark" id="naruto-prev">Prev Page</button>
      </Link>

      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Link className="next-page" to="/MHA">
      <button type="button" class="btn btn-outline-dark" id="naruto-next">Next Page</button>
      </Link>

      <Switch>
        <Route exact path="/MHA" component={MHA}></Route>
      </Switch>
      </div>
     

    
  );
}
