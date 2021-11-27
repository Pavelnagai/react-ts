import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import { PostPropsType} from "../../../../redux/state";

type MyPostPropsType = {
    post:Array<PostPropsType>
    // newPost: AddPropsType
}

const MyPosts = (props: MyPostPropsType) => {
    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    // let newPost = useRef<HTMLTextAreaElement>(null);
    // let addPost = () => {
    //     let text= newPost.current?.value
    //     props.newPost.newPost(text)
    //     newPost.current?.value = ('')
    // }
        return(
        <div className={classn.item}>
            <div className={classn.button}>
                <textarea></textarea>
                <button onClick={() => {
                    alert('hi paul')
                }}>Save
                </button>
            </div>
            <div>
                <h3>My Posts</h3>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
