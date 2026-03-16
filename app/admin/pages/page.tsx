import { AdminShell } from "@/components/admin-shell";
import { pageBlueprints } from "@/lib/mock-data";
import { sectionTemplates } from "@/lib/platform/section-templates";

export default function AdminPagesPage() {
  return (
    <AdminShell
      title="Visual Builder + Publishing"
      description="Structured pages, revisions, reusable templates, and the schema contracts needed for a future drag-and-drop canvas."
    >
      <section className="admin-main__section admin-grid--two">
        <article className="admin-card">
          <p className="eyebrow">Pages</p>
          <h2>Current blueprint pages</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Revision</th>
              </tr>
            </thead>
            <tbody>
              {pageBlueprints.map((page) => (
                <tr key={page.slug}>
                  <td>
                    <strong>{page.name}</strong>
                    <div className="admin-table__meta">{page.slug || "/"}</div>
                  </td>
                  <td>{page.status}</td>
                  <td>{page.revision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="admin-card">
          <p className="eyebrow">Templates</p>
          <h2>Section library for a drag-and-drop builder</h2>
          <ul className="admin-list">
            {sectionTemplates.map((template) => (
              <li key={template.id}>
                <strong>{template.label}</strong>
                <div className="admin-table__meta">{template.description}</div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </AdminShell>
  );
}

