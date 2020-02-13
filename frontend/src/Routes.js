import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "pages/HomePage";
import SignupPage from "pages/SignupPage";
import LoginPage from "pages/LoginPage";
import ProfilePage from "pages/ProfilePage";
import WritePage from "pages/WritePage";
import PostPage from "pages/PostPage";
import TestPage from "pages/TestPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/test" exact component={TestPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/write" component={WritePage} />
    <Route path="/@:username" exact component={ProfilePage} />
    <Route path="/@:username/:postId" component={PostPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
