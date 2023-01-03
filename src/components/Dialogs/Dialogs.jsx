import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import React from "react";
import dialogFormSchema from "../FormValidation/dialogFormSchema";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.state.dialogs.map((d) => <DialogItem name={d.name}  key={d.id}/>);
    let messagesElements = props.dialogsPage.state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddNewMessageForm addNewMessage={addNewMessage}/>
                </div>
            </div>
        </div>
    )


}

const AddNewMessageForm = (props) => {
    return (
        <Formik
            initialValues={{}}
            onSubmit={props.addNewMessage}
            validationSchema={dialogFormSchema}
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <Field type={'textarea'} name={'newMessageBody'} placeholder={'Enter your message body'}/>
                    </div>
                    {errors.newMessageBody && touched.newMessageBody &&
                        <span style={{color: 'red', fontSize: '18px', border: '1px solid red'}}>{errors.newMessageBody}</span>}
                    <div>
                        <button type={'submit'}>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;