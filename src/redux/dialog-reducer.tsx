import {v1} from "uuid";
import {DialogPagePropsType} from "./state";


const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialog: [
        {id: v1(), name: "Pavel"},
        {id: v1(), name: "Andrei"},
        {id: v1(), name: "Alina"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Make"},
        {id: v1(), name: "David"}
    ],
    message: [
        {id: v1(), message: "Hy"},
        {id: v1(), message: "Hello dad"},
        {id: v1(), message: "Your good friends"},
        {id: v1(), message: "Anna good girl"},
        {id: v1(), message: "Meat year"},
        {id: v1(), message: "David boy"}
    ],
    newMessageBody: ''
}
export const dialogReducer = (state: DialogPagePropsType = initialState, action: any) => {
    switch (action.type) {
        case NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE :
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.message.push({id: v1(), message: body},)
            return state
        default:
            return state
    }
}

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