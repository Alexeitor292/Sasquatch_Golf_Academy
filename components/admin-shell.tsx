import Link from "next/link";
import type { ReactNode } from "react";
import { adminNav } from "@/lib/admin-nav";

type AdminShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AdminShell({ title, description, children }: AdminShellProps) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <p className="admin-sidebar__eyebrow">Sasquatch Platform</p>
          <h2>Operations + Site Builder</h2>
          <p>One control center for publishing, inventory, payments, and accounts.</p>
        </div>

        <nav className="admin-sidebar__nav" aria-label="Admin">
          {adminNav.map((item) => (
            <Link key={item.href} href={item.href} className="admin-sidebar__link">
              <span>{item.label}</span>
              <small>{item.description}</small>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-main__header">
          <div>
            <p className="admin-main__eyebrow">Platform Foundation</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="admin-main__actions">
            <Link href="/" className="button button--ghost">
              Marketing Site
            </Link>
            <button className="button button--primary" type="button">
              Publish Draft
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

