import {v1} from "uuid";
import {DialogPagePropsType} from "./state";


const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export const dialogReducer = (state: DialogPagePropsType, action: any) => {
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