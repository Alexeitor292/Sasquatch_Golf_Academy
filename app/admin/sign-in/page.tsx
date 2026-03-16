import Link from "next/link";

export default function AdminSignInPage() {
  return (
    <div className="sign-in-shell">
      <div className="sign-in-card">
        <p className="eyebrow">Authentication Scaffold</p>
        <h1 style={{ marginTop: "10px", marginBottom: "12px", fontSize: "2.2rem", letterSpacing: "-0.04em" }}>
          Admin sign-in is wired for Auth.js next.
        </h1>
        <p style={{ marginBottom: "18px" }}>
          The route and Prisma adapter are in place. The next step is connecting a real provider strategy
          (credentials, magic link, Google, or SSO) and enforcing route guards across `/admin`.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link className="button button--ghost" href="/">
            Back to site
          </Link>
          <Link className="button button--primary" href="/admin">
            View Admin Shell
          </Link>
        </div>
      </div>
    </div>
  );
}

