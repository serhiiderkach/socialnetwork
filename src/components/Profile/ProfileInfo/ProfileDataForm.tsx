import React from "react";
import {Field, Form, Formik} from "formik";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../types/types";

type PropsType = {
    initialValues: ProfileType
    handleSubmit: (formData: ProfileType) => void
    profile: ProfileType
}

const ProfileDataForm: React.FC<PropsType> = ({initialValues, profile,handleSubmit}) => {
    return <Formik
        initialValues={initialValues}
        onSubmit={(values, {setSubmitting}) => {
            handleSubmit(values)
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
                    <b>Contacts</b>: {
                    Object
                        .keys(profile.contacts)
                        .map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}:<Field type={'input'} name={'contacts.' + key} placeholder={key}/></b>
                        {/*{errors.key && touched.key &&*/}
                        {/*    <span*/}
                        {/*        style={{color: 'red', fontSize: '18px', border: '1px solid red'}}>{errors.key}</span>*/}
                        {/*}*/}
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

export default ProfileDataForm;