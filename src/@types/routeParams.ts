export interface ConfirmationParams {
  emotion: string;
  description: string;
  onConfirm: () => void;
  buttonText?: string;
}
export interface SignUpParamsParams {
  initialValues: Object;
  emotion?: string;
  subTitle?: string;
  handleSubmit: (values: any) => void;
  SingUpValidatorSchema: any;
  buttonText?: string;
  page: 'username' | 'email';
}
