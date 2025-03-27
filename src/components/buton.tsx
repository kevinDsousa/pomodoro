import { ButtonContainer, ButtonVariant } from "./button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}



export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Click me</ButtonContainer>;
};