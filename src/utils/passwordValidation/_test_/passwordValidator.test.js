import { passwordValidation } from "../passwordValidator";

describe("TEST for password function", () => {
  it("Should return false if password is 'password'", () => {
    const pass = passwordValidation("password");

    expect(pass).toBe(false);
  });

  it("Should return 'Password must be atleast 8 characters long.'", () => {
    const pass = passwordValidation("Jones");

    expect(pass).toBe("Password must be atleast 8 characters long.");
  });

  it("Should return 'Password valid' if pass is exactly 8 characters long.", () => {
    const pass2 = passwordValidation("12345678");

    expect(pass2).toBe("Password valid");
  });

  it("Should return 'Password valid' if valid", () => {
    const pass = passwordValidation("terrelrjones");

    expect(pass).toBe("Password valid");
  });

  it("Should return 'Must contain a lowercase character.' if valid", () => {
    const pass = passwordValidation("TRFERSWEFFDSDF");

    expect(pass).toBe("Must contain a lowercase character.");
  });
});
