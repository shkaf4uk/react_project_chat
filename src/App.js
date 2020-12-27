import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux_store";
import {WithSuspense} from "./hoc/WithSuspense";
import HeaderContainer from "./components/Header/HeaderContainer";
import './components/FontAwesome/Fontawesome';

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// import UsersContainer from "./components/Users/UsersContainer";
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

// const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/dialogs'}
                               render={WithSuspense(DialogsContainer)}/>
                        <Route path={'/profile/:userId?'}
                               render={WithSuspense(ProfileContainer)}/>
                        <Route path={'/users'}
                               render={WithSuspense(UsersContainer)}/>
                        <Route path={'/login'}
                               render={() => <Login/>}/>

                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(
        mapStateToProps,
        {initializeApp})
)(App);

let MainApp = (props) => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>)
}

export default MainApp;
