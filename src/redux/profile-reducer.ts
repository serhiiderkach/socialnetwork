import {PhotosType, PostType, ProfileType} from "../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({
        type: 'SN/PROFILE/ADD_POST',
        newPostText
    } as const),
    setUserProfile: (profile: ProfileType) => ({
        type: 'SN/PROFILE/SET_USER_PROFILE', profile
    } as const),
    setStatus: (status: string) => ({
        type: 'SN/PROFILE/SET_STATUS', status
    } as const),
    deletePost: (postId: number) => ({
        type: 'SN/PROFILE/DELETE_POST', postId
    } as const),
    savePhotoSuccess: (photos: PhotosType) => ({
        type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos
    } as const)
}


export const getUserProfile = (userId: number | null): ThunkType =>
    async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))
    }

export const getStatus = (userId: number): ThunkType =>
    async (dispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data))
    }

export const updateStatus = (status: string): ThunkType =>
    async (dispatch) => {
        try {
            const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(actions.setStatus(status))
            }
        } catch (error) {
            //dispatch
            alert(error)
        }
    }

export const savePhoto = (file: File): ThunkType =>
    async (dispatch) => {
        const data = await profileAPI.savePhoto(file)

        if (data.resultCode === 0) {
            dispatch(actions.savePhotoSuccess(data.data.photos))
        }
    }
export const saveProfile = (profile: ProfileType, setStatus: any, setSubmitting: any): ThunkType =>
    async (dispatch, getState: GetStateType) => {
        const userId = getState().auth.userId
        const data = await profileAPI.saveProfile(profile)

        if (data.resultCode === 0) {
            if (userId != null) {
               await dispatch(getUserProfile(userId))
            } else {
                throw new Error('UserId can`t be null')
            }
        } else {
            setStatus(data.messages)
            setSubmitting(false)
            return Promise.reject(data.messages[0])
        }
    }

export default profileReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type GetStateType = () => AppStateType
type ThunkType = BaseThunkType<ActionsTypes>