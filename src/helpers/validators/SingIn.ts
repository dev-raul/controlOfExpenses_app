import * as Yup from 'yup';
export const SignInSchemaValidatorData = Yup.object().shape({
  email: Yup.string().email('email inválido').required('email obrigatório'),
  password: Yup.string()
    .min(6, 'a senha precisa no mínimo 6 caracteres')
    .required('a senha obrigatória'),
});
