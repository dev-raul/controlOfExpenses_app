export interface ConfirmationParams {
  emotion: string;
  description: string;
  onConfirm: () => void;
  buttonText?: string;
}
