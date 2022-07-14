import { emailValidation } from "../emailValidator";

describe("Testing email validation function", () => {
  it("Should pass true if email is valid.", () => {
    expect(emailValidation("TJones@gmail.com")).toBe(true);
  });

  it("Should fail for . in beggining of email.", () => {
    expect(emailValidation(".TJones@gmail.com")).toBe(
      "Email can not start with a '.'"
    );
  });

  it("Should fail for . being at the end of email recipient.", () => {
    expect(emailValidation("TJones.@gmail.com")).toBe(
      "Email can not end with a '.'"
    );
  });

  it("Should fail for '..' being inside recipient.", () => {
    expect(emailValidation("TJ..nes@gmail.com")).toBe(false);
  });

  it("Should fail for characters being over 64.", () => {
    expect(
      emailValidation(
        "terreljon1terreljon1terreljon1terreljon1terreljon1terreljon12345@gmail.com"
      )
    ).toBe("Email characters exceeded limit of 64.");
  });

  it("Should pass for characters being 63 long.", () => {
    expect(
      emailValidation(
        "terreljon1terreljon1terreljon1terreljon1terreljon1terreljon1234@gmail.com"
      )
    ).toBe(true);
  });
});
