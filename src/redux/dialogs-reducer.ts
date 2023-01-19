import {InferActionsTypes} from "./redux-store";


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Serhii'},
        {id: 2, name: 'Yura'},
        {id: 3, name: 'Andrii'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>,
}


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE': {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>