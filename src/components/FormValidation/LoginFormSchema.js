import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        //минимальная длина - 2 символа
        .min(2, 'Must be longer than 2 characters')
        //максимальная длина - 20 символов
        .max(50, 'Nice try, nobody has a first name that long')
        .required('Field is Required'),
    password: Yup.string()
        .min(8, 'Must be longer than 8 characters')
        .required('Field is Required'),
    // captcha: Yup.string()
    //     .required('Field is Required'),
});


export const validateEmailField = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Field is Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

export default loginFormSchema;