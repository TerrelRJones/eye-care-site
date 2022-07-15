import { passwordValidationChecks } from "./passValidationData";

export const passwordValidation = (password: string, username: string) => {
  const subUsername = username.substring(1);

  const errors: Array<string> = [];

  if (password === "") return "Please enter a password.";

  if (username.length === 1)
    return "Username invalid; must be atleast 2 characters.";

  if (password.toLowerCase().includes("password"))
    return "Password can not be password.";

  if (password.toLowerCase().includes(subUsername.toLowerCase()))
    return "Password can not contain username or name.";

  passwordValidationChecks.forEach(({ regEx, message }) => {
    if (!password.match(regEx)) {
      errors.push(message);
    }
  });

  if (errors.length <= 2) return { isValid: true, errors: errors };

  if (errors.length >= 3)
    return {
      isValid: false,
      errors: [...errors, "Password must contain atleast 3 rules."],
    };
};
