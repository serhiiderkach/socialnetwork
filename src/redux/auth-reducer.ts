import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api"
import {BaseThunkType, InferActionsTypes} from "./redux-store"
import {authAPI} from "../api/auth-api"
import {securityAPI} from "../api/security-api"


let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
        ({type: 'SN/auth/SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),

    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}


export const getAuthUserData = ():ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: (text: Array<String>)=> void, setSubmitting: (submit: boolean) => void, captcha: string):ThunkType =>
    async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodesEnum.Success) {
            await dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                await dispatch(getCaptchaUrl())
            }
            setStatus(data.messages)
            setSubmitting(false)
        }
    }
export const getCaptchaUrl = (): ThunkType =>
    async (dispatch) => {
        const getCaptchaUrlData = await securityAPI.getCaptchaUrl()
        const captchaUrl = getCaptchaUrlData.url
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
    }

export const logout = (): ThunkType =>
    async (dispatch) => {
        let logoutData = await authAPI.logout()
        if (logoutData.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }

    }

export default authReducer

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
