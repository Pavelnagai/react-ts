import React from 'react';
import classn from "./Post.module.css"
import Like from "./Like/Like";

type PostPropsType = {
    message: string
    likeCheck: number
    img: any
}
const Post: React.FC<PostPropsType>= (props) => {
    return (
        <div>
            <div className={classn.item}>
                <h3>{props.message}</h3>
                <img src={props.img}/>
                <Like likeCheck={props.likeCheck}/>
            </div>
        </div>
    )
}
export default Post
