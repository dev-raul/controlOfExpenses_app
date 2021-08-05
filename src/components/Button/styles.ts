import styled from 'styled-components/native';

interface ContainerProps {
  backgroundColor?: string;
  disabled?: boolean;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({backgroundColor, theme}) =>
    backgroundColor || theme.colors.primary};
  height: 46px;
  padding: 0 5px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
`;
interface TextButtonProps {
  textColor?: string;
}
export const TextButton = styled.Text<TextButtonProps>`
  font-size: 16px;
  color: ${({textColor, theme}) => textColor || theme.colors.white};
`;
