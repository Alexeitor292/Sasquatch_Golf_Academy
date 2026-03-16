export const dynamic = "force-static";

import { AdminShell } from "@/components/admin-shell";

const envTemplate = `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/sasquatch_platform?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="replace-with-a-long-random-secret"
STRIPE_SECRET_KEY=""
S3_BUCKET=""`;

export default function AdminSettingsPage() {
  return (
    <AdminShell
      title="Environment + Integrations"
      description="Branding, domains, storage, payment providers, and authentication all live here once the runtime services are connected."
    >
      <section className="admin-main__section admin-grid--two">
        <article className="admin-card">
          <p className="eyebrow">Environment Variables</p>
          <h2>Minimum setup to boot the platform</h2>
          <pre className="code-block">{envTemplate}</pre>
        </article>

        <article className="admin-card">
          <p className="eyebrow">Legacy Assets</p>
          <h2>Current prototype still preserved</h2>
          <p>
            The original static prototype is still in the repo as `index.html`, `styles.css`, and `script.js` so we
            can port design ideas into the new React renderer intentionally instead of rewriting blindly.
          </p>
        </article>
      </section>
    </AdminShell>
  );
}

