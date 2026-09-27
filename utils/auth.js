// Authentication utilities using localStorage for demo purposes

export const authUtils = {
  // Store user account
  signup: (email, password, name) => {
    if (typeof window === 'undefined') return false;
    
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[email]) {
      return { success: false, message: 'Account already exists' };
    }
    
    users[email] = { password, name };
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: 'Account created successfully' };
  },

  // Login user
  login: (email, password) => {
    if (typeof window === 'undefined') return false;
    
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (!users[email] || users[email].password !== password) {
      return { success: false, message: 'Invalid email or password' };
    }
    
    localStorage.setItem('currentUser', JSON.stringify({ email, name: users[email].name }));
    return { success: true, message: 'Login successful' };
  },

  // Get current user
  getCurrentUser: () => {
    if (typeof window === 'undefined') return null;
    
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },

  // Logout user
  logout: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('currentUser');
  },

  // Check if user is logged in
  isLoggedIn: () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('currentUser');
  },
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};
