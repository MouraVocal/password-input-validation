import { ValidationLine } from "../ValidationLine";
import { ValidationContainer } from "./styles";
import { IValidationBox } from "./types";

export const ValidationBox = ({ input }: IValidationBox) => {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  const validation = (regex: RegExp) => {
    return regex.test(input);
  };

  return (
    <ValidationContainer>
      <p>The password should have at least:</p>
      <ValidationLine
        text="one lowercase character"
        isValid={validation(lower)}
      />
      <ValidationLine
        text="one uppercase character"
        isValid={validation(upper)}
      />
      <ValidationLine
        text="one number character"
        isValid={validation(number)}
      />
      <ValidationLine
        text="one special character"
        isValid={validation(special)}
      />
      <ValidationLine text="8 characters" isValid={validation(length)} />
    </ValidationContainer>
  );
};
