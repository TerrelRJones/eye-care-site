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

  // it("Should return 'Must contain a lowercase character.'", () => {
  //   const pass = passwordValidation("TRFERSWEFFDSDF");

  //   expect(pass).toBe("Must contain a lowercase character.");
  // });

  // it("Should return 'Must contain a number.'", () => {
  //   const pass = passwordValidation("Jonestrrrrr");

  //   expect(pass).toBe("Must contain a number.");
  // });

  // it("Should return 'Must contain a special character.'", () => {
  //   const pass = passwordValidation("Jonestrrr3rr");

  //   expect(pass).toBe("Must contain a special character.");
  // });
});
