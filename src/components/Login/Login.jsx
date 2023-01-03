import React from "react";
import {Formik, Form, Field} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = ({isAuth, login, captchaUrl}) => {
    if (isAuth) return <Navigate to={'/profile'}/>
    return (<div>
            <h1>Login</h1>
            <Formik
                initialValues={{email: "", password: "", rememberMe: false, captcha: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Field is Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                validationSchema={loginFormSchema}
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    login(values.email, values.password, values.rememberMe, setStatus, setSubmitting, values.captcha)
                    setSubmitting(true)
                }}
            >
                {({errors, touched, status, isSubmitting, setSubmitting}) => (
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

let mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);