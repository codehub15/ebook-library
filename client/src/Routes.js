import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Logout from './components/auth/Logout'
import Admin from './components/admin/Admin'
import Account from './components/Account'
import UserAccount from './components/UserAccount'
import Users from './components/Users'
import Ebooks from './components/Books'
import AddBook from './components/admin/book/AddBook'
import EditBook from './components/admin/book/EditBook'
import DeleteBook from './components/admin/book/DeleteBook'
import BookRead from './components/BookRead'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
            <Route path="/account" component={Account} />
            <Route path="/userAccount" component={UserAccount} />
            <Route path="/admin" component={Admin} />
            <Route path="/users" component={Users} />
            <Route path="/ebooks" component={Ebooks} />
            <Route path="/read-book/:id" component={BookRead} />
            <Route path="/add-book" component={AddBook} />
            <Route path="/edit-book" component={EditBook} />
            <Route path="/delete-book" component={DeleteBook} />
            <Route component={NotFound} />
        </Switch>
    )
}
