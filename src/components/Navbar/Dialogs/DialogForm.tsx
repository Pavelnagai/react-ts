import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {required} from "../../../utilits/validators/validators";
import style from './Dialogs.module.css'

export type DialogDataFormType = {
    newMessageBody: string
}
export const DialogForm: React.FC<InjectedFormProps<DialogDataFormType>> = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field className={style.field} name='newMessageBody' placeholder='new Message' component={Textarea}
                   validate={[required]}/>
            <button className={style.buttonForm}>send</button>
        </form>
    )
}

export const AddDialogForm = reduxForm<DialogDataFormType>({form: 'newMessageBody'})(DialogForm)