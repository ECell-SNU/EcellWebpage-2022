import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as views from "./views";
import Blog from "./components/Blog/Blog";
import read from "./views/ReadBlog/ReadBlog";
import React from "react";
import Footer from "./components/Footer/Footer";

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
        <Route exact path="/blogs/archive" component={views.ArchivePage} />
        <Route exact path="/blog/read/:id" component={read} />
        <Route exact path="/test" component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}
