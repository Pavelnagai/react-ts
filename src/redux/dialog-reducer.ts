import {v1} from "uuid";


const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

type DialogPropsType = {
    id: string
    name: string
}
type MessagePropsType = {
    id: string
    message: string
}
export type InitialStateDialogType = typeof initialState

let initialState = {
    dialog: [
        {id: v1(), name: "Pavel"},
        {id: v1(), name: "Andrei"},
        {id: v1(), name: "Alina"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Make"},
        {id: v1(), name: "David"}
    ] as Array<DialogPropsType>,
    message: [
        {id: v1(), message: "Hy"},
        {id: v1(), message: "Hello dad"},
        {id: v1(), message: "Your good friends"},
        {id: v1(), message: "Anna good girl"},
        {id: v1(), message: "Meat year"},
        {id: v1(), message: "David boy"}
    ] as Array<MessagePropsType>,
    newMessageBody: ''
};
type ActionType = SendMessageType | updateMessageType
export const dialogReducer = (state: InitialStateDialogType = initialState, action: ActionType): InitialStateDialogType => {
    switch (action.type) {
        case NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE : {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                message: [...state.message, {id: v1(), message: body}]
            }
        }
        default:
            return state
    }
}
export type SendMessageType = ReturnType<typeof sendMessageCreate>
export type updateMessageType = ReturnType<typeof updateMessageTextAC>

export const sendMessageCreate = () => {
    return {
        type: SEND_MESSAGE,
    } as const
};
export const updateMessageTextAC = (body: string) => {
    return {
        type: NEW_MESSAGE_BODY,
        body: body
    } as const
};