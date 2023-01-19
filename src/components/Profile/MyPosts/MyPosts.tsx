import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";


export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}


const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsElement =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let onAddPost  = (newPostText: string) => {
        props.addPost(newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm addNewPost={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;