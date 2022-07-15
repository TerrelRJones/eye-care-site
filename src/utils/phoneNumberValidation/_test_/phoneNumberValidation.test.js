import { phoneNumberValidator } from "../phoneNumberValidation";

describe("TEST phone number validation function.", () => {
  it("Should return (253)5553322 formatted if valid", () => {
    const phoneNumberTest = phoneNumberValidator("(253)5553322");

    expect(phoneNumberTest.isValid).toBe(true);
  });

  it.only("Should return (253)-505-3322 formatted if valid", () => {
    const phoneNumberTest = phoneNumberValidator("(253)-505-3322");

    expect(phoneNumberTest.phoneNumber).toBe("(253) 505-3322");
  });

  it("Should return 253-555-3322 formatted if valid", () => {
    const phoneNumberTest = phoneNumberValidator("253-555-3312");

    expect(phoneNumberTest.phoneNumber).toBe("(253) 555-3312");
  });

  it("Should return 'Please enter a valid phone number.' for (253) 98-5443", () => {
    const phoneNumberTest = phoneNumberValidator("(253) 98-5443");

    expect(phoneNumberTest.error).toBe("Please enter a valid phone number.");
  });

  it("Should return 'Please enter a valid phone number.' for (253) 183-5443", () => {
    const phoneNumberTest = phoneNumberValidator("(253) 183-5443");

    expect(phoneNumberTest.error).toBe("Please enter a valid phone number.");
  });

  it("Should return 'Please enter a valid phone number.' for 053183-5443", () => {
    const phoneNumberTest = phoneNumberValidator("053183-5443");

    expect(phoneNumberTest.error).toBe("Please enter a valid phone number.");
  });

  it("Should return 'Please enter a valid phone number.' for 05318354434", () => {
    const phoneNumberTest = phoneNumberValidator("05318354434");

    expect(phoneNumberTest.error).toBe("Please enter a valid phone number.");
  });

  it("Should return 'Please enter a valid phone number.' for (253) 835-t434", () => {
    const phoneNumberTest = phoneNumberValidator("(253) 835-t434");

    expect(phoneNumberTest.error).toBe("Please enter a valid phone number.");
  });
});
