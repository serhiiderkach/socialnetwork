import React from 'react'
import './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type  PropsType = MapPropsType & DispatchPropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        // @ts-ignore
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                // @ts-ignore
                this.props.history.push('/login')
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState:PropsType) {
        // @ts-ignore
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                // @ts-ignore
                     isOwner={!this.props.router.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}
// @ts-ignore
function withRouter(Component) {
    function ComponentWithRouterProp(props: PropsType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
