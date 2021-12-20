import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as views from "./views";
import Blog from "./components/Blog/Blog";
import React from "react";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={views.Home} />
        <Route exact path="/home" component={views.LandingPage} />
        <Route exact path="/blogs" component={views.BlogPage} />
        <Route exact path="/events" component={views.EventPage} />
        <Route exact path="/teams" component={views.TeamPage} />
        <Route exact path="/blogMuskan" component={Blog} />
        <Route exact path="/blogs_archive" component={views.ArchivePage}/>
      </Switch>
    </BrowserRouter>
  );
}
