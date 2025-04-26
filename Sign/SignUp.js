// SignUp.js
import { UserManager } from './UserManager.js';
import { FormValidator } from './Validation.js';

// Create a single validator instance
const validator = new FormValidator();

// Initialize default admin account
UserManager.initializeDefaultAdmin();


document.addEventListener('DOMContentLoaded', () => {
  // Initialize the validator when DOM is ready
  validator.init();
  
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // These calls should now work because init() has completed
    validator.validateName({ target: document.getElementById('fullName') });
    validator.validateEmailField({ target: document.getElementById('email') });
    validator.validatePasswordField({ target: document.getElementById('password') });
    
    // Only proceed if all validations pass
    if (validator.isNameValid && validator.isEmailValid && validator.isPasswordValid) {
      const userData = {
        name: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
        role: document.querySelector('input[name="accountType"]:checked').value === 'seller' ? 'seller' : 'customer'
      };
      
      // Assuming UserManager is correctly implemented
      const result = UserManager.createUser(userData);
      
      if (result.success) {
        // Auto login
        UserManager.loginUser(userData.email, userData.password);
        
        // Redirect
        if (userData.role === 'seller') {
          window.location.href = 'testpageseller.html';
        } else {
          window.location.href = 'testpage.html';
        }
      } else {
        alert(result.message || 'Error creating account');
      }
    }
  });
});