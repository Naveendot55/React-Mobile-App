import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="flex-grow fade-in">
        <div className="spacer-lg" />

        {/* Hero Icon */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
              boxShadow: "0 8px 32px rgba(108, 71, 255, 0.35)",
              fontSize: "2rem",
            }}
          >
            🚀
          </div>
        </div>

        <h1 style={{ textAlign: "center" }}>
          Welcome to PopX
        </h1>
        <div className="spacer-sm" />
        <h2 style={{ textAlign: "center" }}>
          Every SaaS app you need, in one place.
        </h2>

        <div className="spacer-md" />

        <p style={{ textAlign: "center", maxWidth: "280px", margin: "0 auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Simplify your workflow today.
        </p>
      </div>

      <div className="spacer-lg" />

      <button className="btn btn-primary" onClick={() => navigate("/signup")}>
        Create Account
      </button>
      <div className="spacer-sm" />
      <button className="btn btn-outline" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>

      <div className="spacer-md" />
    </div>
  );
}

export default Landing;
