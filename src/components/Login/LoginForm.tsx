import {maxLength, required} from "../../utilits/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import style from "../common/FormControls/FormControls.module.css";

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const maxLength30 = maxLength(30)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={Input}/>
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <button>login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'Email'
})(LoginForm)