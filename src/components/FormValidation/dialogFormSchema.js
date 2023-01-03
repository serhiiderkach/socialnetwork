import * as Yup from "yup";

const dialogFormSchema = Yup.object().shape({
    newMessageBody: Yup.string()
        //минимальная длина - 2 символа
        .min(2, 'Must be longer than 2 characters')
        //максимальная длина - 20 символов
        .max(50, 'More than 50 symbols')
        .required('Field is Required'),
});
export default dialogFormSchema;