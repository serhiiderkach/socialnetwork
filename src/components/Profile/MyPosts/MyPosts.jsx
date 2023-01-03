import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import myPostsFormSchema from "../../FormValidation/myPostsFormSchema";


const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm addNewPost={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <Formik
            initialValues={{}}
            onSubmit={props.addNewPost}
            validationSchema={myPostsFormSchema}
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <Field type={'textarea'} name={'newPostText'} placeholder={'Enter post'}/>
                    </div>
                    {errors.newPostText && touched.newPostText &&
                        <span style={{color: 'red', fontSize: '18px', border: '1px solid red'}}>{errors.newPostText}</span>}
                    <div>
                        <button type={'submit'}>Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default MyPosts;