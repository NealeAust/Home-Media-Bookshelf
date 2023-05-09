// A function using a regular expression (regex) to validate email entered in Contact Form is valid.
export function validateEmail(email) {
    const re = /^([a-z0-9_ \ .-]+)@([\da-z \ .-]+).([a-z \ .]{2,6})$/;
    return re.test(String(email).toLowerCase());
  }
