import React, {useRef} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../../../../redux/state";

const MyPosts = (props: ProfilePagePropsType) => {

    let newPost = useRef<HTMLTextAreaElement>(null);
    let Push = () => {
        let text = newPost.current?.value;
        alert(text);
    }
    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)

    return (
        <div className={classn.item}>
            <div>
                <textarea ref={newPost}>click me</textarea>
            </div>
            <div>
                <button onClick={Push}>Save</button>
            </div>
            <div>
                <h3>My Posts</h3>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
