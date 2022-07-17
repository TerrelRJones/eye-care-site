import { emailValidation } from "../emailValidator";

describe("Testing email validation function", () => {
  it("Should return true if email is valid.", () => {
    expect(emailValidation("TJones@gmail.com").isValid).toBe(true);
  });

  it("Should fail if @ symbal is not present.", () => {
    expect(emailValidation("TJonesgmail.com").isValid).toBe(false);
  });

  it("Should fail if .com, .edu, etc is not present.", () => {
    expect(emailValidation("TJones@gmail").isValid).toBe(false);
  });

  it("Should fail if email does not end with .com, etc.", () => {
    expect(emailValidation("TJonesgmail.com").isValid).toBe(false);
  });

  it("Should fail for . in beggining of email.", () => {
    expect(emailValidation(".TJones@gmail.com").error).toBe(
      "Email can not start with a '.'"
    );
  });

  it("Should fail for . being at the end of email recipient.", () => {
    expect(emailValidation("TJones.@gmail.com").error).toBe(
      "Email can not end with a '.'"
    );
  });

  it("Should fail for '..' being inside recipient.", () => {
    expect(emailValidation("TJ..nes@gmail.com").isValid).toBe(false);
  });

  it("Should fail for characters being over 64.", () => {
    expect(
      emailValidation(
        "terreljon1terreljon1terreljon1terreljon1terreljon1terreljon12345@gmail.com"
      ).error
    ).toBe("Email characters exceeded limit of 64 characters.");
  });

  it("Should pass for characters being under 64 characters long.", () => {
    expect(
      emailValidation(
        "terreljon1terreljon1terreljon1terreljon1terreljon1terreljon1234@gmail.com"
      ).isValid
    ).toBe(true);
  });
});
