import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="fade-in">
        <div className="spacer-md" />

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: "1.2rem" }}>Account Settings</h1>
          <button
            onClick={() => navigate("/")}
            className="link"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "0.85rem",
            }}
          >
            Logout
          </button>
        </div>

        <div className="spacer-md" />

        {/* Profile card */}
        <div className="profile-header">
          <div className="profile-avatar">
            M
            <span className="camera-badge">📷</span>
          </div>
          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>marry@gmail.com</p>
          </div>
        </div>

        <div className="spacer-sm" />

        <div className="profile-description">
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        <div className="spacer-lg" />

        {/* Decorative stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "12px",
            textAlign: "center",
          }}
        >
          {[
            { label: "Projects", value: "12" },
            { label: "Teams", value: "4" },
            { label: "Streak", value: "30d" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "16px 8px",
                background: "var(--bg-card)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--primary-light)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
