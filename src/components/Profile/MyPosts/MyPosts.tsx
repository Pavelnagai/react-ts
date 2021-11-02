import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classn.item}>
            My Posts
            <Post title={"Post1"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbvFfv0asMpnbwK_kbqMGgrTOeC0FR-lrXw&usqp=CAU"}/>
            <Post title={"Post2"} img={"https://images.beinsports.com/_5WS_TDaEkSE8qs8kMH016kcRg0=/670x424/smart/3992496-000_9PR8WL.jpg"}/>
            <Post title={"Post3"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSYpyjZbhuMDJpeZly0eh4vt5XDE4OvCotWSrmlzgjilQgf49eXkrgkGo5vTsUdfdHxs&usqp=CAU"}/>
            <Post title={"Post4"} img={"https://as01.epimg.net/en/imagenes/2021/09/26/soccer/1632648990_268324_noticia_normal_recorte1.jpg"}/>
        </div>
    )
}
export default MyPosts
