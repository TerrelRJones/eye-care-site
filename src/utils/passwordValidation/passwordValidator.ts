import { passwordValidationChecks } from "./passValidationData";

export const passwordValidation = (password: string, username: string) => {
  const checkPass = password.toString();
  const checkUsername = username.toString();
  const subUsername = checkUsername.substring(1);

  const errors: Array<{}> = [];

  if (checkPass === "") return "Please enter a password.";

  if (checkUsername.length === 1)
    return "Username invalid; must be atleast 2 characters.";

  if (checkPass.toLowerCase().includes("password"))
    return "Password can not be password.";

  if (checkPass.toLowerCase().includes(subUsername.toLowerCase()))
    return "Password can not contain username or name.";

  passwordValidationChecks.forEach(({ regEx, message }) => {
    if (!checkPass.match(regEx)) {
      errors.push(message);
    }
  });

  if (errors.length <= 2) return true;
  if (errors.length >= 3) return "Password must contain atleast 3 rules.";

  return errors;
};
