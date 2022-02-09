import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogDataFormType = {
    newMessageBody: string
}
export const DialogForm: React.FC<InjectedFormProps<DialogDataFormType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' placeholder='new Message' component='textarea' />
            <button>send</button>
        </form>
    )
}

export const AddDialogForm = reduxForm<DialogDataFormType>({form: 'newMessageBody'})(DialogForm)