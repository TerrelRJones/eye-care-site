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

  console.log(formattedNumber);
  if (checkNumber[0] === "0" || checkNumber[0] === "1")
    return { isValid: false, error: "Please enter a valid phone number." };

  checkNumber.forEach((number) => {
    if (Number(number)) {
      formattedNumber = formattedNumber += number;
    }
  });

  console.log(formattedNumber);

  if (formattedNumber.length !== 10)
    return { isValid: false, error: "Please enter a valid phone number." };

  if (!formattedNumber[3].match(/[2-9]/))
    return { isValid: false, error: "Please enter a valid phone number." };

  let match = formattedNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    formattedNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  // console.log(formattedNumber);

  return { isValid: true, phoneNumber: formattedNumber, error: null };
};
