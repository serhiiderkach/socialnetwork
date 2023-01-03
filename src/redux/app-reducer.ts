import {getAuthUserData} from "./auth-reducer";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type ActionsTypes = initializedSuccessActionType;

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType =>
    ({type: INITIALIZED_SUCCESS,});


type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsTypes>


export const initializeApp =  ():
    ThunkType => async (dispatch) => {
       await dispatch(getAuthUserData());
       await dispatch(initializedSuccess());

}

export default appReducer;