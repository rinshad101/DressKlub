import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";
import { Eye, EyeOff, User, Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, role: "USER" });
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!input.username.trim()) {
      errors.username = 'Username is required';
    } else if (input.username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
    }
    
    if (!input.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!input.password) {
      errors.password = 'Password is required';
    } else if (input.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await dispatch(registerUser(input)).unwrap();
      console.log(response);
      alert("You are registered successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = () => {
    const password = input.password;
    if (!password) return { strength: 0, text: '' };
    
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;
    
    const texts = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
    
    return { strength, text: texts[strength], color: colors[strength] };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="main-container flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">DressKulb</h1>
          <p className="text-gray-600">Join our fashion community</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 p-8 transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
                <p className="text-gray-600 mt-1">Start your style journey with us</p>
              </div>

              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User size={16} />
                  Username
                </label>
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'username' ? 'transform scale-[1.02]' : ''
                }`}>
                  <input
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('username')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Choose a unique username"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      focusedField === 'username'
                        ? 'border-blue-400 shadow-lg shadow-blue-100'
                        : validationErrors.username
                        ? 'border-red-400'
                        : 'border-gray-200 hover:border-gray-300'
                    } focus:outline-none placeholder-gray-400`}
                  />
                  {input.username && !validationErrors.username && (
                    <CheckCircle className="absolute right-3 top-3.5 text-green-500" size={20} />
                  )}
                  {validationErrors.username && (
                    <AlertCircle className="absolute right-3 top-3.5 text-red-500" size={20} />
                  )}
                </div>
                {validationErrors.username && (
                  <p className="text-red-500 text-sm flex items-center gap-1 animate-pulse">
                    <AlertCircle size={14} />
                    {validationErrors.username}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </label>
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'email' ? 'transform scale-[1.02]' : ''
                }`}>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      focusedField === 'email'
                        ? 'border-blue-400 shadow-lg shadow-blue-100'
                        : validationErrors.email
                        ? 'border-red-400'
                        : 'border-gray-200 hover:border-gray-300'
                    } focus:outline-none placeholder-gray-400`}
                  />
                  {input.email && !validationErrors.email && /\S+@\S+\.\S+/.test(input.email) && (
                    <CheckCircle className="absolute right-3 top-3.5 text-green-500" size={20} />
                  )}
                  {validationErrors.email && (
                    <AlertCircle className="absolute right-3 top-3.5 text-red-500" size={20} />
                  )}
                </div>
                {validationErrors.email && (
                  <p className="text-red-500 text-sm flex items-center gap-1 animate-pulse">
                    <AlertCircle size={14} />
                    {validationErrors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Lock size={16} />
                  Password
                </label>
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'password' ? 'transform scale-[1.02]' : ''
                }`}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Create a strong password"
                    className={`w-full px-4 py-3 pr-12 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      focusedField === 'password'
                        ? 'border-blue-400 shadow-lg shadow-blue-100'
                        : validationErrors.password
                        ? 'border-red-400'
                        : 'border-gray-200 hover:border-gray-300'
                    } focus:outline-none placeholder-gray-400`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {input.password && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${passwordStrength.color}`}
                          style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {passwordStrength.text}
                      </span>
                    </div>
                  </div>
                )}
                
                {validationErrors.password && (
                  <p className="text-red-500 text-sm flex items-center gap-1 animate-pulse">
                    <AlertCircle size={14} />
                    {validationErrors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Register'
                )}
              </button>

              {/* Login Link */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-xs">
          <p>By creating an account, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Register;