import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store, {AppStateType} from "./redux/redux-store";
import { UsersPage } from './components/Users/UsersContainer';
import {LoginPage} from "./components/Login/LoginPage";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
    initializeApp: () => void
};

class App extends Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred');

    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        {/*in react 6 exact properties is by default, використовувати * щоб сторінка відображалася і для дочірніх сторінок*/}
                        <Route path='/' element={
                            <React.Suspense fallback={<div>Завантаження...</div>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }/>
                        <Route path='/dialogs/*' element={
                            <React.Suspense fallback={<div>Завантаження...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }/>
                        <Route path='/profile/*' element={
                            <React.Suspense fallback={<div>Завантаження...</div>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        {/*<Route path='/news/' element={<DialogsContainer />}/>*/}
                        {/*<Route path='/music/' element={<DialogsContainer />}/>*/}
                        {/*<Route path='/settings/' element={<DialogsContainer />}/>*/}

                        <Route path='/users/*' element={<UsersPage pageTitle={'Samurai'}/>}/>
                        <Route path='/login/*' element={<LoginPage/>}/>
                        <Route path='*' element={<div>404 not found</div>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(
    mapStateToProps,
    {initializeApp})(App);

let SamuraiJSApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
