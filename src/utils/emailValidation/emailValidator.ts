import { MAX_RECIPIENT_LENGTH } from "const/emailConst";

interface EmailValidationResponse {
  isValid: boolean;
  error: string | null;
}

export const emailValidation = (email: string): EmailValidationResponse => {
  const recipient = email.split("@")[0];
  const lastCharOfRecipient = recipient.length - 1;

  const emailCheck = new RegExp(/[\w!@#$%^&*()-+/?.]+@[\w]+\.[a-z]{2,}/);
  const isValidEmail = emailCheck.test(email);

  if (!isValidEmail)
    return {
      isValid: false,
      error: "Please enter valid email. Ex: user@vsp.com",
    };

  if (recipient[0].includes("."))
    return { isValid: false, error: "Email can not start with a '.'" };

  if (recipient[lastCharOfRecipient].includes("."))
    return { isValid: false, error: "Email can not end with a '.'" };

  if (recipient.includes(".."))
    return {
      isValid: false,
      error: "Email can not have consistant periods ex: ..",
    };

  if (recipient.length >= MAX_RECIPIENT_LENGTH)
    return {
      isValid: false,
      error: `Email characters exceeded limit of ${MAX_RECIPIENT_LENGTH} characters.`,
    };

  return { isValid: isValidEmail, error: null };
};
