export const passwordValidationChecks = [
  {
    check: "Password contains a number",
    regEx: /[0-9]/,
    message: "Password must contain a number.",
  },
  {
    check: "Password contains a lowercase character",
    regEx: /[a-z]/,
    message: "Password must contain a lowercase character.",
  },
  {
    check: "Password contains a uppercase character",
    regEx: /[A-Z]/,
    message: "Password must contain an uppercase character.",
  },
  {
    check: "Password contains a special character",
    regEx: /[!@#$%^&*]/,
    message: "Password must contain a special character.",
  },
];
