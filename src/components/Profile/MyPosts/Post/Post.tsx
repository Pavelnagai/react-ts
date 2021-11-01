import React from 'react';
import classn from "./Post.module.css"

const Post = () => {
    return (
        <div>

            <div className={classn.item}>
                <img
                    src="https://images.beinsports.com/KscHKiqa7p3Vfv8MxqbFO3fpf2Q=/670x424/smart/lionel-messi_1rplyam066gri106a8czy2sdzr.jpg"/>
                post 2
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
}
export default Post
