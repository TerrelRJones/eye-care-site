import { passwordValidation } from "../passwordValidator";

describe("TEST for password function", () => {
  it('Should return "Password can not be password."', () => {
    const pass = passwordValidation("password", "Terrel");

    expect(pass).toBe("Password can not be password.");
  });

  // it('Should return "Password must contain a upercase character."', () => {
  //   const pass = passwordValidation("jonessss", "Terrel");

  //   expect(pass).toBe("Password must contain an upercase character.");
  // });

  it("Should return if password is valid true", () => {
    const pass = passwordValidation("Jonestr125bl!", "Terrel");

    expect(pass).toBe(true);
  });

  it("Should return if", () => {
    const pass = passwordValidation("Jonestr125bl!", "jOnes");

    expect(pass).toBe("Password can not contain username or name.");
  });

  it("Should return 'Must contain a upercase character.'", () => {
    const pass = passwordValidation("terrelrj3!ones", "Chris");

    expect(pass[0]).toBe("Password must contain an uppercase character.");
  });
});
