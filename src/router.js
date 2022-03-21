import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as views from "./views";
import read from "./views/ReadBlog/ReadBlog";
import React from "react";
// import Footer from "./components/Footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={views.Home} /> */}
        <Route exact path="/404" component={views.PageNotFound} />
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={views.LandingPage} />
        <Route exact path="/blogs" component={views.BlogPage} />

        {/* <Redirect exact from="/events" to="/404" /> */}
        <Route exact path="/events" component={views.EventPage} />

        <Route exact path="/teams" component={views.TeamPage} />
        <Route exact path="/blogs/archive" component={views.ArchivePage} />
        <Route exact path="/blog/read/:id" component={read} />

        {/* <Route component={views.PageNotFound} /> */}
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
