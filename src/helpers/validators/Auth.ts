import * as Yup from 'yup';

export const UserNameSchemaValidatorData = Yup.object().shape({
  username: Yup.string()
    .min(4, 'mínimo de 4 caracteres')
    .required('username obrigatório'),
});
export const UserEmailSchemaValidatorData = Yup.object().shape({
  email: Yup.string()
    .required('email obrigatório')
    .email('email inválido, ex: mail@mymoney.com'),
});

export const SignInSchemaValidatorData = Yup.object()
  .shape({
    password: Yup.string()
      .required('senha obrigatória')
      .test(
        'is-number',
        'deve conter numeros',
        value => !!value?.match(/([0-9])/),
      )
      .test(
        'is-letter',
        'deve conter letras minusculas',
        value => !!value?.match(/([a-z])/),
      )
      .test(
        'is-letter',
        'deve conter letras maisculas',
        value => !!value?.match(/([A-Z])/),
      )
      .test(
        'is-letter',
        'deve conter caracteres especiais',
        value => !!value?.match(/([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/),
      )
      .min(6, 'mínimo de 6 caracteres'),
  })
  .concat(UserNameSchemaValidatorData);
export const ForgetPasswordSchemaValidatorData = Yup.object()
  .shape({})
  .concat(UserEmailSchemaValidatorData);
