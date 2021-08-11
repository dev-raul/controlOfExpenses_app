export interface ConfirmationParams {
  emotion: string;
  description: string;
  onConfirm: () => void;
  buttonText?: string;
}
export interface SignUpParamsParams {
  emotion?: string;
  subTitle?: string;
}
