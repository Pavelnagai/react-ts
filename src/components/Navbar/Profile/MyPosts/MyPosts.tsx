import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    let postDate = [
        {id:1, message: "Post 1", likeCheck: 12},
        {id:2, message: "Post 2", likeCheck: 18},
        {id:3, message: "Post 3", likeCheck: 11},
        {id:4, message: "Post 4", likeCheck: 19},
    ]
    return (
        <div className={classn.item}>
            <h3>My Posts</h3>
            <Post message={postDate[0].message}
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbvFfv0asMpnbwK_kbqMGgrTOeC0FR-lrXw&usqp=CAU"}
                  likeCheck={postDate[0].likeCheck}/>
            <Post message={postDate[1].message}
                  img={"https://images.beinsports.com/_5WS_TDaEkSE8qs8kMH016kcRg0=/670x424/smart/3992496-000_9PR8WL.jpg"}
                  likeCheck={postDate[1].likeCheck}/>
            <Post message={postDate[2].message}
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSYpyjZbhuMDJpeZly0eh4vt5XDE4OvCotWSrmlzgjilQgf49eXkrgkGo5vTsUdfdHxs&usqp=CAU"}
                  likeCheck={postDate[2].likeCheck}/>
            <Post message={postDate[3].message}
                  img={"https://as01.epimg.net/en/imagenes/2021/09/26/soccer/1632648990_268324_noticia_normal_recorte1.jpg"}
                  likeCheck={postDate[3].likeCheck}/>
        </div>
    )
}
export default MyPosts
