import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {InitialStateType} from "../../redux/dialogs-reducer";
import dialogFormSchema from "../FormValidation/dialogFormSchema";
import {Field, Form, Formik} from "formik";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}
export type NewMessageFormValuesType = {
    newMessageBody: string
}
type initialValuesType = {
    newMessageBody: string
}
const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );


    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
        console.log(values)
    }

    const initialValues:initialValuesType = {newMessageBody: ''}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(addNewMessage)}
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
                </div>
            </div>
        </div>
    )
}

export default Dialogs;