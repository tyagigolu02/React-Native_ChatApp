import { useState } from 'react';
import { PASSWORD_REQUIREMENTS, ERROR_MESSAGES } from './loginData';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Email validation
  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Password validation
  const validatePassword = (passwordValue) => {
    return PASSWORD_REQUIREMENTS.every((req) => req.regex.test(passwordValue));
  };

  // Check password requirements status
  const getPasswordRequirementStatus = (passwordValue) => {
    return PASSWORD_REQUIREMENTS.map((req) => ({
      ...req,
      met: req.regex.test(passwordValue),
    }));
  };

  // Validate form fields
  const validateForm = (isSignup = false) => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = ERROR_MESSAGES.EMPTY_FIELD;
    } else if (!validateEmail(email)) {
      newErrors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }

    // Password validation
    if (!password) {
      newErrors.password = ERROR_MESSAGES.EMPTY_FIELD;
    } else if (isSignup && !validatePassword(password)) {
      newErrors.password = ERROR_MESSAGES.INVALID_PASSWORD;
    }

    // Confirm password validation (signup only)
    if (isSignup) {
      if (!confirmPassword) {
        newErrors.confirmPassword = ERROR_MESSAGES.EMPTY_FIELD;
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = ERROR_MESSAGES.PASSWORD_MISMATCH;
      }

      // First name validation (signup only)
      if (!firstName) {
        newErrors.firstName = ERROR_MESSAGES.EMPTY_FIELD;
      }

      // Last name validation (signup only)
      if (!lastName) {
        newErrors.lastName = ERROR_MESSAGES.EMPTY_FIELD;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset form
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setErrors({});
    setIsLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    validateEmail,
    validatePassword,
    validateForm,
    getPasswordRequirementStatus,
    resetForm,
  };
};
