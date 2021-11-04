import React from 'react';

type LikePropsType = {
    likeCheck: number
}
const Like = (props: LikePropsType) => {
    return (
        <div>
            <span>Like {props.likeCheck}</span>
        </div>
    )
}
export default Like
