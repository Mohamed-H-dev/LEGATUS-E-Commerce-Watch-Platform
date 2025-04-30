// SignUp.js
import { UserManager } from "./UserManager.js";
import { FormValidator } from "./Validation.js";

// Create a single validator instance
const validator = new FormValidator();

// Initialize default admin account
UserManager.initializeDefaultAdmin();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the validator when DOM is ready
  validator.init();

  //this is just for the brand name
  const accountTypeRadios = document.querySelectorAll(
    'input[name="accountType"]'
  );
  const brandNameContainer =
    document.getElementById("brandNameContainer") || createBrandNameField();
  // added event listener to show brand name field when seller is selected
  accountTypeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Show brand name field only if seller is selected
      if (this.value === "seller") {
        brandNameContainer.style.display = "block";
      } else {
        brandNameContainer.style.display = "none";
      }
    });
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // These calls should now work because init() has completed
    validator.validateName({ target: document.getElementById("fullName") });
    validator.validateEmailField({ target: document.getElementById("email") });
    validator.validatePasswordField({
      target: document.getElementById("password"),
    });

    // Only proceed if all validations pass
    if (
      validator.isNameValid &&
      validator.isEmailValid &&
      validator.isPasswordValid
    ) {
      // const userData = {
      //   name: document.getElementById('fullName').value.trim(),
      //   email: document.getElementById('email').value.trim(),
      //   password: document.getElementById('password').value,
      //   role: document.querySelector('input[name="accountType"]:checked').value === 'seller' ? 'seller' : 'customer'};
      
      const isSeller =
        document.querySelector('input[name="accountType"]:checked').value ===
        "seller";

      // For sellers, also validate brand name
      let isBrandNameValid = true;
      if (isSeller) {
        const brandNameInput = document.getElementById("brandName");
        if (!brandNameInput.value.trim()) {
          isBrandNameValid = false;
          // Show error for empty brand name
          const errorElement =
            document.getElementById("brandNameError") ||
            createErrorElement("brandNameError", brandNameInput);
          errorElement.textContent = "Brand name is required";
          errorElement.style.display = "block";
        } else {
          const errorElement = document.getElementById("brandNameError");
          if (errorElement) errorElement.style.display = "none";
        }
      }

      const userData = {
        name: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        role: isSeller ? "seller" : "customer",
      };

      if (isSeller) {
        userData.brandName = document.getElementById("brandName").value.trim();
      }


      const result = UserManager.createUser(userData);

      if (result.success) {
        UserManager.loginUser(userData.email, userData.password);

        // Redirect
        if (userData.role === "seller") {
          window.location.href = "testpageseller.html";
        } else {
          window.location.href = "../Customer Dashboard/customer-dashboard.html";
        }
      } else {
        alert(result.message || "Error creating account");
      }
    }
  });



});
