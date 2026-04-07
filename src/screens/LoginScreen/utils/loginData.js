// Static data and constants for login screen

export const PASSWORD_REQUIREMENTS = [
  { id: 'length', text: 'At least 8 characters', regex: /.{8,}/ },
  { id: 'uppercase', text: 'One uppercase letter', regex: /[A-Z]/ },
  { id: 'lowercase', text: 'One lowercase letter', regex: /[a-z]/ },
  { id: 'number', text: 'One number', regex: /[0-9]/ },
  { id: 'special', text: 'One special character', regex: /[!@#$%^&*(),.?":{}|<>]/ },
];

export const VIEW_TYPES = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  OTP: 'otp',
  FORGOT_PASSWORD: 'forgotPassword',
};

export const OTP_LENGTH = 6;
export const OTP_TIMER_SECONDS = 60;

export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password does not meet requirements',
  PASSWORD_MISMATCH: 'Passwords do not match',
  EMPTY_FIELD: 'This field is required',
  INVALID_OTP: 'Invalid OTP code',
  NETWORK_ERROR: 'Network error. Please try again.',
};
