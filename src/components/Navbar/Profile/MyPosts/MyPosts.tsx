import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "./MyPostsContainer";
import {AddPostForm, FormDataPostType} from './Post/MyPostForm';

const MyPosts = (props: PostType) => {

    let postElement = props.post.map(p => <Post key={p.id} message={p.message} likeCheck={p.likeCheck}/>)

    const addPostHandler = (values: FormDataPostType) => {
        props.addPostAC(values.post)
    }
    return (
        <div className={classn.item}>
            <AddPostForm onSubmit={addPostHandler}/>
            <div>
                <h3>My Posts</h3>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts



