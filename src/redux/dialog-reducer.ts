import {v1} from "uuid";

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
        {id: v1(), message: "I`ll be back"},
        {id: v1(), message: "Meat year"},
        {id: v1(), message: "David boy"}
    ] as Array<MessagePropsType>,
};
type ActionType = SendMessageType
export const dialogReducer = (state: InitialStateDialogType = initialState, action: ActionType): InitialStateDialogType => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let body = action.payload.newMessageBody
            return {
                ...state,
                message: [...state.message, {id: v1(), message: body}]
            }
        }
        default:
            return state
    }
}

export type SendMessageType = ReturnType<typeof sendMessageCreate>
export const sendMessageCreate = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            newMessageBody
        }
    } as const
};
