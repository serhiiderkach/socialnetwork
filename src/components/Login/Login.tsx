import React from "react";
import {Field, Form, Formik} from "formik";
import loginFormSchema, {validateEmailField} from "../FormValidation/LoginFormSchema";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: any, setSubmitting:any, captcha: string) => void
}
type OwnProps = {
    captchaUrl: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps

const Login: React.FC<PropsType> = ({isAuth, login, captchaUrl}) => {
    if (isAuth) return <Navigate to={'/profile'}/>

    return (<div>
            <h1>Login</h1>
            <Formik
                initialValues={{email: "", password: "", rememberMe: false, captcha: ''}}
                validate={validateEmailField}
                validationSchema={loginFormSchema}
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    login(values.email, values.password, values.rememberMe, setStatus, setSubmitting, values.captcha)
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

// export default connect<PropsType, AppStateType>(mapStateToProps, {login})(Login);
// @ts-ignore
export default connect(mapStateToProps, {login})(Login);