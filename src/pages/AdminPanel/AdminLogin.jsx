import React, { useState } from "react";
import axios from "axios";
import "./AdminLogin.css"; // Import the separate CSS file
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
console.log(process.env.REACT_APP_API_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/admin/login`, {
        email,
        password
      });
      
      sessionStorage.setItem("token", res.data.token);
      setMessage("Login Successful!");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 800);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Admin Portal</h2>
          <p>Enter your credentials to access the dashboard</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
          </div>

  
          <div className="form-submit">
            <button
              type="submit"
              disabled={loading}
              className={loading ? "loading" : ""}
            >
              {loading ? (
                <span className="spinner-container">
                  <span className="spinner"></span>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>
        
        {message && (
          <div className={`message ${message.includes("Success") ? "success" : "error"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;