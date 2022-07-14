import { passwordValidation } from "../passwordValidator";

describe("TEST for password function", () => {
  it('Should return "Password can not be password."', () => {
    const pass = passwordValidation("password", "tjones");

    expect(pass).toBe("Password can not be password.");
  });

  it("Should return 'Password can not contain username or name.'", () => {
    const pass = passwordValidation("HeyJones3488!", "tjones");

    expect(pass).toBe("Password can not contain username or name.");
  });

  it("Should return true", () => {
    const pass = passwordValidation("terrelrj3!ones", "tjones");

    expect(pass).toBe(true);
  });

  it("Should return 'Password must contain atleast 3 rules.'", () => {
    const pass = passwordValidation("terrelrddsdsdsdes", "tjones");

    expect(pass).toBe("Password must contain atleast 3 rules.");
  });
});
