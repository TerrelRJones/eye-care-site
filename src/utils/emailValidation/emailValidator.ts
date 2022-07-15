interface EmailValidationResponse {
  isValid: boolean;
  error: string | null;
}

export const emailValidation = (email: string): EmailValidationResponse => {
  const MAX_RECIPIENT_LENGTH = 64;
  const recipient = email.split("@")[0].split("");
  const lastCharOfRecipient = recipient.length - 1;

  // clean up tomorrow 7/15
  const emailCheck = new RegExp(/[\w!@#$%^&*()-+/?.]+@[\w]+\.[a-z]{2,}/);
  const isValidEmail = emailCheck.test(email);

  if (recipient[0].includes("."))
    return { isValid: false, error: "Email can not start with a '.'" };

  if (recipient[lastCharOfRecipient].includes("."))
    return { isValid: false, error: "Email can not end with a '.'" };

  if (recipient.length >= MAX_RECIPIENT_LENGTH)
    return {
      isValid: false,
      error: `Email characters exceeded limit of ${MAX_RECIPIENT_LENGTH} characters.`,
    };

  // checking if ".." exist witin recipient
  for (let i = 1; i < recipient.length - 2; i++) {
    const forbidden = "..";
    let adjacentVals = recipient[i] + recipient[i + 1];
    if (adjacentVals === forbidden)
      return {
        isValid: false,
        error: "Email can not have consistant periods ex: ..",
      };
  }
  return { isValid: isValidEmail, error: null };
};
