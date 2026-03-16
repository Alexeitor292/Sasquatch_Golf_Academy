import Link from "next/link";
import { integrationChecklist } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <>
      <section className="marketing-hero">
        <div className="marketing-shell marketing-hero__panel">
          <p className="eyebrow">Platform Rebuild</p>
          <h1>From landing page prototype to a full Sasquatch commerce platform.</h1>
          <p>
            This Next.js foundation is designed to grow into a visual page builder plus a real operations backend for
            accounts, catalog, inventory, orders, payments, and publishing.
          </p>
          <div className="marketing-actions">
            <Link className="button button--primary" href="/admin">
              Open Admin Foundation
            </Link>
            <Link className="button button--ghost" href="/admin/pages">
              View Builder Blueprint
            </Link>
          </div>
        </div>
      </section>

      <section className="marketing-shell marketing-grid">
        <article className="marketing-card">
          <p className="eyebrow">Builder</p>
          <h2>Structured drag-and-drop editing</h2>
          <p>
            Pages are rendered from section schemas so non-technical admins can move blocks, edit content, swap media,
            and publish safely without breaking layouts.
          </p>
        </article>

        <article className="marketing-card">
          <p className="eyebrow">Commerce</p>
          <h2>Inventory, orders, and payment rails</h2>
          <p>
            The backend is shaped for memberships, services, physical products, order tracking, payment capture, and
            future fulfillment logic.
          </p>
        </article>

        <article className="marketing-card">
          <p className="eyebrow">Accounts</p>
          <h2>Customers, roles, and business operations</h2>
          <p>
            Customer accounts, admin permissions, audit logs, and page revisions are part of the platform model from
            the start instead of being bolted on later.
          </p>
        </article>
      </section>

      <section className="marketing-shell marketing-card" style={{ marginBottom: "64px" }}>
        <p className="eyebrow">What This Foundation Includes</p>
        <h2>Core platform tracks already mapped into the scaffold</h2>
        <ul className="check-list">
          {integrationChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

