export const emailValidation = (email: string) => {
  const checkEmail = email.toString();
  const MAX_RECIPIENT_LENGTH = 64;
  const recipient = checkEmail.split("@")[0].split("");
  const lastCharOfRecipient = recipient.length - 1;

  // clean up tomorrow 7/15
  const emailCheck = new RegExp(/[\w!@#$%^&*()-+/?.]+@[\w]+\.(com|edu|org)/);
  const isValidEmail = emailCheck.test(checkEmail);

  if (recipient[0].includes(".")) return "Email can not start with a '.'";
  if (recipient[lastCharOfRecipient].includes("."))
    return "Email can not end with a '.'";

  if (recipient.length >= MAX_RECIPIENT_LENGTH)
    return `Email characters exceeded limit of ${MAX_RECIPIENT_LENGTH}.`;

  // checking if ".." exist witin recipient
  for (let i = 1; i < recipient.length - 2; i++) {
    const forbidden = "..";
    let adjacentVals = recipient[i] + recipient[i + 1];
    if (adjacentVals === forbidden) return false;
  }
  return isValidEmail;
};
