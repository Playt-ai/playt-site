'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import Header from '../components/Header';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+1',
    birthdate: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const formatPhoneNumber = (value, countryCode) => {
    const phoneNumber = value.replace(/\D/g, '');
    
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      const formatted = formatPhoneNumber(value, formData.countryCode);
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else if (name === 'countryCode') {
      let countryCode = value;
      if (!countryCode.startsWith('+') && countryCode.length > 0) {
        countryCode = '+' + countryCode.replace(/\D/g, '');
      } else {
        countryCode = '+' + countryCode.slice(1).replace(/\D/g, '');
      }
      
      const digitsOnly = formData.phoneNumber.replace(/\D/g, '');
      const reformatted = formatPhoneNumber(digitsOnly, countryCode);
      
      setFormData(prev => ({
        ...prev,
        countryCode: countryCode,
        phoneNumber: reformatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    if (!isValidPhoneNumber(formData.phoneNumber)) {
      setError('Please enter a valid phone number with at least 10 digits');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const cognitoResponse = await fetch('/api/register-cognito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phoneNumber: formData.countryCode + formData.phoneNumber.replace(/\D/g, ''),
          password: formData.password
        }),
      });

      const cognitoResult = await cognitoResponse.json();
      if (!cognitoResponse.ok) {
        setError(cognitoResult.error || 'Failed to create Cognito user');
        setIsLoading(false);
        return;
      }

      const backendResponse = await fetch('/api/register-backend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.countryCode + formData.phoneNumber.replace(/\D/g, ''),
          birthdate: formData.birthdate,
          cognitoSub: cognitoResult.userSub,
        }),
      });

      const backendText = await backendResponse.text();
      if (!backendResponse.ok) {
        try {
          await fetch('/api/register-cognito', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: formData.email })
          });
        } catch (rollbackError) {
          console.error('Failed to rollback Cognito user:', rollbackError);
        }
        setError(backendText || 'Backend registration failed');
        setIsLoading(false);
        return;
      }

      setError('');
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-playt-purple/5 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
              Welcome to Playt!
            </h1>
            <p className="text-gray-600 mb-6">
              Your account has been created successfully. Check your email for a verification link to complete your registration.
            </p>
            <div className="space-y-4">
              <a 
                href="https://app.playt.ai/login"
                className="block w-full bg-playt-purple hover:bg-playt-purple/90 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Sign In
              </a>
              <Link 
                href="/"
                className="block w-full text-playt-purple hover:text-playt-purple/80 font-medium py-2 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-playt-purple/5 to-white">
      <Header />

      {/* Registration Form */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold font-poppins text-gray-900 mb-2">
                Get Started
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                  placeholder="john@restaurant.com"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="px-3 py-3 border border-gray-300 rounded-l-lg border-r-0 focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors bg-gray-50 text-sm w-20 text-center"
                    placeholder="+1"
                    maxLength="4"
                  />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                    placeholder="(555) 123-4567"
                    maxLength="14"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Enter country code (e.g., +1, +44) and phone number
                </p>
              </div>

              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple/20 focus:border-playt-purple transition-colors"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-playt-purple hover:bg-playt-purple/90 disabled:bg-playt-purple/70 text-white font-medium py-3 px-6 rounded-lg shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5 disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
              {error && (
                <div className="pt-2">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="https://app.playt.ai/login" className="text-playt-purple hover:text-playt-purple/80 font-medium">
                  Sign in
                </a>
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our{' '}
                <Link href="/privacy" className="text-playt-purple hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
