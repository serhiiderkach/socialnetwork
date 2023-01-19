import {Field, Form, Formik} from "formik";
import myPostsFormSchema from "../../../FormValidation/myPostsFormSchema";
import React from "react";


type PropsType = {
    addNewPost: (newPostText: string) => void
}

const AddPostForm: React.FC<PropsType> = (props) => {
    return (
        <Formik
            initialValues={{newPostText: ''}}
            onSubmit={(values) => {
                props.addNewPost(values.newPostText)
            }}
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

export default AddPostForm;