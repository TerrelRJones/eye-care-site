import { passwordValidationChecks } from "./passValidationData";

type ErrorRespose = {
  isValid: boolean;
  errors: string[];
};

export const passwordValidation = (
  password: string,
  username: string
): ErrorRespose => {
  const subUsername = username.substring(1);

  const errors: Array<string> = [];

  if (password === "")
    return { isValid: false, errors: ["Please enter a password."] };

  if (password.length < 8)
    return {
      isValid: false,
      errors: ["Password invalid; must be at least 8 characters."],
    };

  if (password.toLowerCase().includes("password"))
    return { isValid: false, errors: ["Password can not be password."] };

  if (password.toLowerCase().includes(subUsername.toLowerCase()))
    return {
      isValid: false,
      errors: ["Password can not contain username or name."],
    };

  passwordValidationChecks.forEach(({ regEx, message }) => {
    if (!password.match(regEx)) {
      errors.push(message);
    }
  });

  if (errors.length <= 1) return { isValid: true, errors: [] };

  return {
    isValid: false,
    errors: [...errors],
  };
};
