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
export default loginFormSchema;