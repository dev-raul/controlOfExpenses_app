import * as Yup from 'yup';
export const SignInSchemaValidatorData = Yup.object().shape({
  username: Yup.string()
    .min(4, 'mínimo de 4 caracteres')
    .required('username obrigatório'),
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
});