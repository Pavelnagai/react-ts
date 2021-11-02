import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import Like from "./Post/Like/Like";


const MyPosts = () => {
    return (
        <div className={classn.item}>
            My Posts
            <Post title={"Post1"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbvFfv0asMpnbwK_kbqMGgrTOeC0FR-lrXw&usqp=CAU"} value={3}/>
            <Post title={"Post2"} img={"https://images.beinsports.com/_5WS_TDaEkSE8qs8kMH016kcRg0=/670x424/smart/3992496-000_9PR8WL.jpg"} value={5}/>
            <Post title={"Post3"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSYpyjZbhuMDJpeZly0eh4vt5XDE4OvCotWSrmlzgjilQgf49eXkrgkGo5vTsUdfdHxs&usqp=CAU"} value={2}/>
            <Post title={"Post4"} img={"https://as01.epimg.net/en/imagenes/2021/09/26/soccer/1632648990_268324_noticia_normal_recorte1.jpg"} value={4}/>
        </div>
    )
}
export default MyPosts
