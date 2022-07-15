interface PhoneNumberValidatorResponse {
  isValid: boolean;
  phoneNumber?: string;
  error: string | null;
}

export const phoneNumberValidator = (
  phoneNumber: string
): PhoneNumberValidatorResponse => {
  const checkNumber = phoneNumber.split("");
  let formattedNumber = "";

  checkNumber.forEach((number) => {
    if (number === "0" || number === "1")
      return { isValid: false, error: "Please enter a valid phone number." };

    if (Number(number)) {
      formattedNumber = formattedNumber += number;
    }
  });

  if (formattedNumber.length < 10 || formattedNumber.length > 10)
    return { isValid: false, error: "Please enter a valid phone number." };

  if (!formattedNumber[3].match(/[2-9]/))
    return { isValid: false, error: "Please enter a valid phone number." };

  let match = formattedNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    formattedNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return { isValid: true, phoneNumber: formattedNumber, error: null };
};
