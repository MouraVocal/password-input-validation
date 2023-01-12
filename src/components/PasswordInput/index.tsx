import { InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  PasswordIcon,
  PasswordInputContainer,
  StyledPasswordInput
} from "./styles";

export const PasswordInput = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <PasswordInputContainer>
      <StyledPasswordInput
        type={showPassword ? "text" : "password"}
        {...props}
      />
      <PasswordIcon onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </PasswordIcon>
    </PasswordInputContainer>
  );
};
