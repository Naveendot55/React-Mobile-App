import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="mobile-container">
      <div className="fade-in" style={{ overflowY: "auto" }}>
        <div className="spacer-md" />

        <h1>Create your<br />PopX account</h1>

        <div className="spacer-lg" />

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="signup-name">
              Full Name <span className="required">*</span>
            </label>
            <input
              id="signup-name"
              type="text"
              placeholder="John Doe"
              value={form.fullName}
              onChange={update("fullName")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              id="signup-phone"
              type="tel"
              placeholder="+1 234 567 8900"
              value={form.phone}
              onChange={update("phone")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">
              Email Address <span className="required">*</span>
            </label>
            <input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update("email")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">
              Password <span className="required">*</span>
            </label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={update("password")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-company">Company Name</label>
            <input
              id="signup-company"
              type="text"
              placeholder="Acme Inc."
              value={form.company}
              onChange={update("company")}
            />
          </div>

          <div className="form-group">
            <label>
              Are you an Agency? <span className="required">*</span>
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={update("isAgency")}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={update("isAgency")}
                />
                No
              </label>
            </div>
          </div>

          <div className="spacer-md" />

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>

        <div className="spacer-md" />

        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>

        <div className="spacer-md" />
      </div>
    </div>
  );
}

export default Signup;
