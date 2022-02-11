import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../../../utilits/validators/validators";
import {Textarea} from "../../../../common/FormControls/FormControls";


export type FormDataPostType = {
    post: string
}
const maxLength50 = maxLength(20)
export const MyPostForm: React.FC<InjectedFormProps<FormDataPostType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'post'} component={Textarea} placeholder='new Post' validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Save</button>
            </div>

        </form>
    )
}

export const AddPostForm = reduxForm<FormDataPostType>({form: 'newAddPostForm'})(MyPostForm)