export const phoneNumberValidator = (phoneNumber: string) => {
  const checkNumber = phoneNumber.toString().split("");
  let formattedNumber = "";

  checkNumber.forEach((number) => {
    if (number === "0" || number === "1")
      return "Please enter a valid phone number.";

    if (Number(number)) {
      formattedNumber = formattedNumber += number;
    }
  });

  if (formattedNumber.length < 10 || formattedNumber.length > 10)
    return "Please enter a valid phone number.";

  if (!formattedNumber[3].match(/[2-9]/))
    return "Please enter a valid phone number.";

  let match = formattedNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;

  return formattedNumber;
};
