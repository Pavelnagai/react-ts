import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


export type FormDataPostType = {
    post: string
}
export const MyPostForm: React.FC<InjectedFormProps<FormDataPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'post'} component={'textarea'} placeholder='new Post'/>
            </div>
            <div>
                <button>Save</button>
            </div>

        </form>
    )
}

export const AddPostForm = reduxForm<FormDataPostType>({form: 'newAddPostForm'})(MyPostForm)