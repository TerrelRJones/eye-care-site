import { passwordValidationChecks } from "./passValidationData";

export const passwordValidation = (password: string, username: string) => {
  const checkPass = password.toString();
  const errors: Array<{}> = [];

  if (checkPass === "") return "Please enter a password.";

  if (checkPass.toLowerCase().includes("password"))
    return "Password can not be password.";

  if (checkPass.toLowerCase().includes(username.toLowerCase()))
    return "Password can not contain username or name.";

  passwordValidationChecks.forEach(({ check, regEx, message }) => {
    if (!checkPass.match(regEx)) {
      errors.push(message);
    }
  });

  if (errors.length === 0) return true;

  return errors;
};
