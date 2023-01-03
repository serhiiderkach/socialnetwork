import React from "react";
import {Field, Form, Formik} from "formik";
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, initialValues, profile,}) => {
    return <Formik
        initialValues={initialValues}
        onSubmit={(values, {setSubmitting, setStatus}) => {
            handleSubmit(values, setStatus, setSubmitting)
            setSubmitting(true)
        }}
    >
        {({errors, touched, status, isSubmitting}) =>  (
            <Form>
                <div>
                    <b>Full name</b>: <Field type={'input'} name={'fullName'} placeholder={'Full Name'}/>
                </div>

                <div>
                    <b>Looking for a job</b>: <Field type={'checkbox'} name={'lookingForAJob'} placeholder={''}/>
                </div>

                <div>
                    <b>My professional skills</b>:
                    <Field type={'textarea'} name={'lookingForAJobDescription'} placeholder={'My professional skills'}/>
                </div>


                <div>
                    <b>About me</b>:
                    <Field type={'textarea'} name={'aboutMe'} placeholder={'About me'}/>
                </div>

                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}:<Field type={'input'} name={'contacts.' + key} placeholder={key}/></b>
                        {errors.key && touched.key &&
                            <span
                                style={{color: 'red', fontSize: '18px', border: '1px solid red'}}>{errors.key}</span>
                        }
                    </div>

                })}
                    {status && <span style={{
                        color: 'green',
                        fontSize: '18px',
                        border: '1px solid red'
                    }}>{status}</span>}

                </div>
                <div>
                    <button type={'submit'} disabled={isSubmitting}>Save</button>
                </div>
            </Form>
        )}
    </Formik>
}

// <Formik
//     initialValues={{email: "", password: "", rememberMe: false}}
//
//     onSubmit={(values, {setSubmitting, setStatus}) => {
//         login(values.email, values.password, values.rememberMe, setStatus, setSubmitting)
//         setSubmitting(true)
//     }}
// >
//     {({errors, touched, status, isSubmitting}) => (
//         <Form>
//             <div>
//                 <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
//             </div>
//             {errors.email && touched.email &&
//                 <span style={{color: 'red', fontSize: '18px', border: '1px solid red'}}>{errors.email}</span>}
//             <div>
//                 <Field type={'password'} name={'password'} placeholder={'password'}/>
//             </div>
//             {errors.password && touched.password &&
//                 <span style={{color: 'red',fontSize: '18px',border: '1px solid red'}}>{errors.password}</span>}
//
//             {status && <span style={{ color: 'red',fontSize: '18px',border: '1px solid red'}}>{status}</span>}
//
//             <div>
//                 <Field type={'checkbox'} name={'rememberMe'}/>
//                 <label htmlFor={'rememberMe'}> remember me </label>
//             </div>
//
//             <button type={'submit'} disabled={isSubmitting}>Log in</button>
//         </Form>
//     )}
// </Formik>
export default ProfileDataForm;