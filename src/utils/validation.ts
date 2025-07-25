// Validation utility functions for the Marina App

export const validateEmail = (email: string): boolean => {
  // Simple email regex to ensure the format looks like name@domain.tld
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password: string): boolean => {
  // Password must be at least 8 characters long
  return password.length >= 8;
};

export const validateName = (name: string): boolean => {
  // Name should be at least 2 characters long after trimming
  return name.trim().length >= 2;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  // Check whether password and confirm password match
  return password === confirmPassword;
};

export const passwordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  /*
   * Estimate the strength of a password based on simple rules:
   * - length at least 8: +1
   * - mixture of uppercase and lowercase letters: +1
   * - contains at least one digit: +1
   * - contains a special character: +1
   */
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

  if (score <= 2) return 'weak';
  if (score === 3) return 'medium';
  return 'strong';
};
