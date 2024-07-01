import { StyledButton } from './Button.styled';

const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <StyledButton type={type} selected={selected} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
