import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="mobile-container">
      <div className="fade-in">
        <div className="spacer-md" />

        <h1>Sign in to your<br />PopX account</h1>
        <div className="spacer-sm" />
        <h2>Welcome back! Enter your credentials below.</h2>

        <div className="spacer-lg" />

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-email">
              Email Address <span className="required">*</span>
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">
              Password <span className="required">*</span>
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="spacer-md" />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>

        <div className="spacer-md" />

        <p style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
