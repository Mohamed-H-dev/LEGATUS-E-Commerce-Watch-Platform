// validation.js
export class FormValidator {
  constructor() {
    this.isNameValid = false;
    this.isEmailValid = false;
    this.isPasswordValid = false;
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initialize());
    } else {
      this.initialize();
    }
  }

  initialize() {
    this.form = document.querySelector("form");
    this.fullNameInput = document.getElementById("fullName");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.submitButton = document.querySelector("button[type='submit']");

    if (!this.form || !this.fullNameInput || !this.emailInput || !this.passwordInput || !this.submitButton) {
      console.error('Required form elements not found');
      return;
    }

    this.setupEventListeners();
    this.initializeFields();
  }

  setupEventListeners() {
    // Validate full name
    this.fullNameInput.addEventListener("input", this.validateName.bind(this));

    // Validate email
    this.emailInput.addEventListener("input", this.validateEmailField.bind(this));

    // Validate password
    this.passwordInput.addEventListener("input", this.validatePasswordField.bind(this));
  }

  validateName(event) {
    const input = event.target || this.fullNameInput;
    if (input.value.trim().length < 2) {
      this.isNameValid = false;
      this.showError(input, "Name must be at least 2 characters");
    } else {
      this.isNameValid = true;
      this.removeError(input);
    }
    this.updateSubmitButton();
  }

  validateEmailField(event) {
    const input = event.target || this.emailInput;
    if (!this.validateEmail(input.value)) {
      this.isEmailValid = false;
      this.showError(input, "Please enter a valid email address");
    } else {
      this.isEmailValid = true;
      this.removeError(input);
    }
    this.updateSubmitButton();
  }

  validatePasswordField(event) {
    const input = event.target || this.passwordInput;
    const currentlyValid = this.validatePassword(input.value);
    this.isPasswordValid = currentlyValid;

    if (currentlyValid) {
      this.removeError(input);
    } else {
      this.showError(
        input,
        "Password must be at least 8 characters with uppercase, lowercase and number"
      );
    }

    this.updateSubmitButton();
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }

  showError(input, message) {
    // Remove any existing error message
    this.removeError(input);

    // Create and append error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message text-danger small mt-1";
    errorDiv.textContent = message;

    // Insert after the input or its container if it's in a special wrapper
    const container = input.parentElement.classList.contains("position-relative")
      ? input.parentElement
      : input;
    container.parentElement.insertBefore(errorDiv, container.nextSibling);

    // Highlight the input
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  }

  removeError(input) {
    const existingError =
      input.parentElement.querySelector(".error-message") ||
      input.parentElement.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }

  updateSubmitButton() {
    if (!this.submitButton) return;

    const allValid = this.isNameValid && this.isEmailValid && this.isPasswordValid;
    this.submitButton.disabled = !allValid;

    if (this.submitButton.disabled) {
      this.submitButton.classList.add("opacity-50");
    } else {
      this.submitButton.classList.remove("opacity-50");
    }
  }

  initializeFields() {
    // Initial validation of prefilled values
    if (this.fullNameInput.value) this.validateName({ target: this.fullNameInput });
    if (this.emailInput.value) this.validateEmailField({ target: this.emailInput });
    if (this.passwordInput.value) this.validatePasswordField({ target: this.passwordInput });
  }
}
