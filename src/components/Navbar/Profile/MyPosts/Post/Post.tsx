import React from 'react';
import classn from "./Post.module.css"

type PostPropsType = {
    message: string
    likeCheck: number
}
const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={classn.item}>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbvFfv0asMpnbwK_kbqMGgrTOeC0FR-lrXw&usqp=CAU"}/>
                <h3>{props.message}</h3>
                {`Like ${props.likeCheck}`}
            </div>
        </div>

    )
}
export default Post
