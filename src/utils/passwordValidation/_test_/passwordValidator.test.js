import { passwordValidation } from "../passwordValidator";

describe("TEST for password function", () => {
  it('Should return "Password can not be password."', () => {
    const pass = passwordValidation("password", "tjones");

    expect(pass.errors[0]).toBe("Password can not be password.");
  });

  it("Should return 'Password can not contain username or name.'", () => {
    const pass = passwordValidation("HeyJones3488!", "tjones");

    expect(pass.errors[0]).toBe("Password can not contain username or name.");
  });

  it("Should return 'Password invalid; must be at least 8 characters.' If user pass in 1 character.", () => {
    const pass = passwordValidation("Q2a", "tjones");

    expect(pass.errors[0]).toBe(
      "Password invalid; must be at least 8 characters."
    );
  });

  it("Should return valid if 3 rules are met", () => {
    const pass = passwordValidation("terrelrj3!ones", "tjones");

    expect(pass.isValid).toBe(true);
  });

  it("Should return false if at least 3 rules are not met.", () => {
    const pass = passwordValidation("terrelrddsdsdsdes", "tjones");

    expect(pass.isValid).toBe(false);
  });
});
