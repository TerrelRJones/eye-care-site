import { emailValidation } from "../emailValidator";

describe("Testing email validation function", () => {
  it("Should pass true", () => {
    expect(emailValidation("TJones@gmail.com")).toBe(true);
  });

  it("Should fail for . in beggining.", () => {
    expect(emailValidation(".TJones@gmail.com")).toBe(false);
  });
});
