import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";
import { StatCard } from "@/components/stat-card";
import { dashboardStats, integrationChecklist } from "@/lib/mock-data";

export default function AdminOverviewPage() {
  return (
    <AdminShell
      title="Admin Platform Overview"
      description="This is the operational control center foundation for publishing, catalog management, inventory, payments, and customer lifecycle tools."
    >
      <section className="admin-main__section">
        <div className="admin-grid">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} detail={stat.detail} />
          ))}
        </div>
      </section>

      <section className="admin-main__section admin-grid--two">
        <article className="admin-card">
          <p className="eyebrow">Platform Scope</p>
          <h2>What this backend is designed to grow into</h2>
          <ul className="check-list">
            {integrationChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="admin-card">
          <p className="eyebrow">Next Build Step</p>
          <h2>Recommended implementation order</h2>
          <ol className="check-list">
            <li>Connect PostgreSQL and run Prisma migrations.</li>
            <li>Replace static admin pages with server data loaders.</li>
            <li>Add working authentication and role gates.</li>
            <li>Build the schema-driven page builder canvas.</li>
            <li>Wire payment providers and order webhooks.</li>
          </ol>
          <div style={{ marginTop: "18px" }}>
            <Link className="button button--ghost" href="/admin/settings">
              Review Environment Setup
            </Link>
          </div>
        </article>
      </section>
    </AdminShell>
  );
}

