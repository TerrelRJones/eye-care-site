export const passwordValidation = (password: string) => {
  if (password === "password") return false;
  if (password.length < 8) return "Password must be atleast 8 characters long.";
  return password;
};
