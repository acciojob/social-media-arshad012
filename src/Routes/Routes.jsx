import React from "react";
import { Switch, Route } from 'react-router-dom';

import Posts from "../Pages/Posts";
import Users from "../Pages/Users";
import UserPosts from "../Pages/UserPosts";
import Notification from "../Pages/Notifications";
import CreatePost from "../Pages/CreatePost";
import NotFound from "../Pages/NotFound";
import ViewPost from "../Pages/ViewPost";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/users' component={Users} />
            <Route path='/users/:id' component={UserPosts} />
            <Route path='/notifications' component={Notification} />
            <Route path='/createPost' component={CreatePost} />
            <Route path='/posts/:postId' component={ViewPost} />
            <Route path='*' component={NotFound} />
        </Switch>
    )
}

export default Routes;