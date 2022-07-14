export const emailValidation = (email: string) => {
  const emailCheck = new RegExp(
    /[^.][\w!@#$%^&*()-+/?.]+@[\w]+\.(com|edu|org)/
  );

  return emailCheck.test(email);
};
