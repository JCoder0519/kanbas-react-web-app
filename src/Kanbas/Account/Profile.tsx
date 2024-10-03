import { Link } from "react-router-dom";
import React from 'react';
import './styles.css'; // Optional custom styling

export default function Profile() {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-md-6">
        <h3 className="mb-4">Profile</h3>

        {/* Username Input */}
        <input
          id="wd-username"
          value="alice"
          placeholder="username"
          className="form-control mb-3"
        />

        {/* Password Input */}
        <input
          id="wd-password"
          value="123"
          placeholder="password"
          type="password"
          className="form-control mb-3"
        />

        {/* First Name */}
        <input
          id="wd-firstname"
          value="Alice"
          placeholder="First Name"
          className="form-control mb-3"
        />

        {/* Last Name */}
        <input
          id="wd-lastname"
          value="Wonderland"
          placeholder="Last Name"
          className="form-control mb-3"
        />

        {/* Date of Birth */}
        <input
          id="wd-dob"
          value="2000-01-01"
          type="date"
          className="form-control mb-3"
        />

        {/* Email */}
        <input
          id="wd-email"
          value="alice@wonderland.com"
          type="email"
          className="form-control mb-3"
        />

        {/* Role Selection */}
        <select id="wd-role" className="form-select mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        {/* Sign Out Button */}
        <Link
          to="/Kanbas/Account/Signin"
          className="btn btn-danger w-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
