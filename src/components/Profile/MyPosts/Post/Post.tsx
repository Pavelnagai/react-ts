import React from 'react';
import classn from "./Post.module.css"
import Like from "./Like/Like";

type PostPropsType = {
    title: string
    value: number
    img: any
}
const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={classn.item}>
                <h3>{props.title}</h3>
                <img src={props.img}/>
                <Like value={props.value}/>
            </div>
        </div>
    )
}
export default Post
