// form-validation.js
export default class FormValidator {
    constructor() {
      this.isNameValid = false;
      this.isEmailValid = false;
      this.isPasswordValid = false;
      this.hasEmailError = false;
      this.hasPasswordError = false;
    }
  
    init() {
      document.addEventListener("DOMContentLoaded", () => {
        this.form = document.querySelector("form");
        this.fullNameInput = document.getElementById("fullName");
        this.emailInput = document.getElementById("email");
        this.passwordInput = document.getElementById("password");
        this.togglePassword = document.querySelector(".password-visability-toggle");
        this.submitButton = document.querySelector(".btn-submit");
  
        this.setupEventListeners();
        this.initializeFields();
      });
    }
  
    setupEventListeners() {
      // Validate name
      this.fullNameInput.addEventListener("input", this.validateName.bind(this));
  
      // Validate email
      this.emailInput.addEventListener("input", this.validateEmailField.bind(this));
  
      // Validate password
      this.passwordInput.addEventListener("input", this.validatePasswordField.bind(this));
  
      // Toggle password visibility
      this.togglePassword.addEventListener("click", this.togglePasswordVisibility.bind(this));
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
        if (!this.hasEmailError) {
          this.showError(input, "Please enter a valid email address");
          this.hasEmailError = true;
        }
      } else {
        this.isEmailValid = true;
        this.removeError(input);
        this.hasEmailError = false;
      }
      this.updateSubmitButton();
    }
  
    validatePasswordField(event) {
      const input = event.target || this.passwordInput;
      const currentlyValid = this.validatePassword(input.value);
      this.isPasswordValid = currentlyValid;
  
      if (currentlyValid) {
        this.removeError(input);
        this.hasPasswordError = false;
      } else {
        if (!this.hasPasswordError) {
          this.showError(
            input,
            "Password must be at least 8 characters with uppercase, lowercase and number"
          );
          this.hasPasswordError = true;
        }
      }
  
      this.updateSubmitButton();
    }
  
    togglePasswordVisibility() {
      const type =
        this.passwordInput.getAttribute("type") === "password" ? "text" : "password";
      this.passwordInput.setAttribute("type", type);
  
      // Change the eye icon
      const eyeIcon = this.togglePassword.querySelector("i");
      if (type === "password") {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      } else {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      }
    }
  
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
      return emailRegex.test(email);
    }
  
    validatePassword(password) {
      // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return passwordRegex.test(password);
    }
  
    showError(input, message) {
      // Remove any existing error message
      const existingError = input.parentElement.querySelector(".error-message");
      if (existingError) {
        existingError.remove();
      }
  
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
      const allValid = this.isNameValid && this.isEmailValid && this.isPasswordValid;
      this.submitButton.disabled = !allValid;
  
      if (this.submitButton.disabled) {
        this.submitButton.classList.add("opacity-50");
      } else {
        this.submitButton.classList.remove("opacity-50");
      }
  
      console.log("Validation states:", {
        name: this.isNameValid,
        email: this.isEmailValid,
        password: this.isPasswordValid,
        buttonEnabled: !this.submitButton.disabled,
      });
    }
  
    initializeFields() {
      // Initial validation of prefilled values
      if (this.fullNameInput.value) this.validateName({ target: this.fullNameInput });
      if (this.emailInput.value) this.validateEmailField({ target: this.emailInput });
      if (this.passwordInput.value) this.validatePasswordField({ target: this.passwordInput });
    }
  }