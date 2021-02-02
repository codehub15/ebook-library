import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Logout from './components/Logout'
import Account from './components/Account'
import UserAccount from './components/UserAccount'
import Admin from './components/admin/Admin'
import Users from './components/Users'
import Ebooks from './pages/Books'
import NotFound from './components/NotFound'
import { AuthContext } from "./context/AuthContext"
// import AddBook from './components/admin/book/AddBook'
// import EditBook from './components/admin/book/EditBook'
// import DeleteBook from './components/admin/book/DeleteBook'


export default function Routes() {
    const { isAuth, setIsAuth, isAdmin, setIsAdmin } = useContext(AuthContext)

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ebooks"
                render={(props) =>
                    <Ebooks {...props}
                        isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route path="/login"
                render={(props) =>
                    <Login {...props}
                        isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/account"
                render={(props) =>
                    <Account {...props}
                        isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route path="/admin"
                render={(props) =>
                    <Admin {...props}
                        isAuth={isAuth} setIsAuth={setIsAuth}
                        isAdmin={isAdmin} setIsAdmin={setIsAdmin}
                    />}
            />
            <Route path="/userAccount"
                render={(props) =>
                    <UserAccount {...props}
                        isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route path="/logout"
                render={(props) =>
                    <Logout {...props}
                        isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            {/* <Route path="/add-book" component={AddBook} />
            <Route path="/edit-book" component={EditBook} />
            <Route path="/delete-book" component={DeleteBook} /> */}

            <Route path="/users" component={Users} />
            <Route component={NotFound} />
        </Switch>
    )
}
