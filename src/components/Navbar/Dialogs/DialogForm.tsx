import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {required} from "../../../utilits/validators/validators";

export type DialogDataFormType = {
    newMessageBody: string
}
export const DialogForm: React.FC<InjectedFormProps<DialogDataFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' placeholder='new Message' component={Textarea} validate={[required]}/>
            <button>send</button>
        </form>
    )
}

export const AddDialogForm = reduxForm<DialogDataFormType>({form: 'newMessageBody'})(DialogForm)