import { passwordValidationChecks } from "./passValidationData";

type ErrorRespose = {
  isValid: boolean;
  errors: string[];
};

export const passwordValidation = (
  password: string,
  username: string
): ErrorRespose => {
  const cleanedPass = password.trim();
  const subUsername = username.substring(1);

  const errors: Array<string> = [];

  if (cleanedPass === "")
    return { isValid: false, errors: ["Please enter a password."] };

  if (cleanedPass.length < 8)
    return {
      isValid: false,
      errors: ["Password invalid; must be at least 8 characters."],
    };

  if (cleanedPass.toLowerCase().includes("password"))
    return { isValid: false, errors: ["Password can not be password."] };

  if (cleanedPass.toLowerCase().includes(subUsername.toLowerCase()))
    return {
      isValid: false,
      errors: ["Password can not contain username or name."],
    };

  passwordValidationChecks.forEach(({ regEx, message }) => {
    if (!cleanedPass.match(regEx)) {
      errors.push(message);
    }
  });

  if (errors.length <= 1) return { isValid: true, errors: [] };

  return {
    isValid: false,
    errors: [...errors],
  };
};
