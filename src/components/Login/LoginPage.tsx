import React from "react";
import {Field, Form, Formik} from "formik";
import loginFormSchema, {validateEmailField} from "../FormValidation/LoginFormSchema";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";


export const LoginPage: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch: AppDispatch = useDispatch()

    const handleSubmit = (email: string, password: string, rememberMe: boolean, setStatus: (text: Array<String>)=> void, setSubmitting: (submit: boolean) => void, captcha: string) => {
        dispatch(login(email,password,rememberMe,setStatus,setSubmitting,captcha))
    }

    if (isAuth) return <Navigate to={'/profile'}/>

    return (<div>
            <h1>Login</h1>
            <Formik
                initialValues={{email: "", password: "", rememberMe: false, captcha: ''}}
                validate={validateEmailField}
                validationSchema={loginFormSchema}
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    handleSubmit(values.email, values.password, values.rememberMe, setStatus, setSubmitting, values.captcha)
                    setSubmitting(true)
                }}
            >
                {({errors, touched, status, isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
                        </div>
                        {errors.email && touched.email &&
                            <span
                                style={{
                                    color: 'red',
                                    fontSize: '18px',
                                    border: '1px solid red'
                                }}
                            >{errors.email}</span>}

                        <div>
                            <Field type={'password'} name={'password'} placeholder={'password'}/>
                        </div>
                        {errors.password && touched.password &&
                            <span
                                style={{
                                    color: 'red',
                                    fontSize: '18px',
                                    border: '1px solid red'
                                }}>{errors.password}</span>}

                        {status && <span style={{
                            color: 'green',
                            fontSize: '18px',
                            border: '1px solid red'
                        }}>{status}</span>}

                        <div>
                            <Field type={'checkbox'} name={'rememberMe'}/>
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        {captchaUrl &&
                            <img src={captchaUrl} alt=""/>
                        }
                        <div>
                            {captchaUrl &&
                                <Field type={'text'} name={'captcha'} placeholder={'Symbols from image'}/>
                            }
                        </div>

                        {errors.captcha && touched.captcha &&
                            <span
                                style={{
                                    color: 'red',
                                    fontSize: '18px',
                                    border: '1px solid red'
                                }}>{errors.captcha}</span>}

                        <button type={'submit'} disabled={isSubmitting}>Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

