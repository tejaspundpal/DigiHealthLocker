import React from 'react'
import logo from '../../../assets/images/DigiHealthlockerlogo.png'
import { Link } from 'react-router-dom'

const PatientLogin = () => {
  return (
    <div className="flex h-screen bg-white">
    <div className="m-auto max-w-sm w-full">
      <div className="text-center mb-6">
        <img src={logo} alt="Logo" className="h-20 mx-auto w-56 mb-4" />
        <h1 className="text-2xl font-bold">Login</h1>
      </div>
      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          <div className="text-right">
            <a to="/forgot-password" className="text-sm text-teal-600 hover:text-teal-500 cursor-pointer">Forgot Password?</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Log in
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-sm">
          Don't have an account? <a to="/register" className="text-teal-600 hover:text-teal-500 cursor-pointer">Register here</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default PatientLogin

