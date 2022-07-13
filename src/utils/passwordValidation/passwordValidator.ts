export const passwordValidation = (password: string) => {
  if (password === "password") return false;
  if (password.length < 8) return "Password must be atleast 8 characters long.";

  const lowerCase = new RegExp("(?=.*[a-z])");
  // const upperCase = new RegExp("(?=.*[A-Z])");
  // const num = new RegExp("(?=.*[0-9])");
  // const specialChar = new RegExp("(?=.*[!@#$%^&*])");
  // const eightCharLong = new RegExp("(?=.{8,})");

  if (!lowerCase.test(password)) return "Must contain a lowercase character.";

  return "Password valid";
};
