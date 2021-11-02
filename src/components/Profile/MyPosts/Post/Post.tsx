import React from 'react';
import classn from "./Post.module.css"
import Like from "./Like/Like";

const Post = (props: any) => {
    return (
        <div>
            <div className={classn.item}>
                <h3>{props.title}</h3>
                <img src={props.img}/>
                <span>
                    <Like value={5} />
                </span>
            </div>
        </div>
    )
}
export default Post
