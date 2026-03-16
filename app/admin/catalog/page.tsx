import { AdminShell } from "@/components/admin-shell";
import { catalogPreview } from "@/lib/mock-data";

export default function AdminCatalogPage() {
  return (
    <AdminShell
      title="Catalog Management"
      description="Products, memberships, services, pricing, and merchandising should all live in one unified product model."
    >
      <section className="admin-main__section">
        <article className="admin-card">
          <p className="eyebrow">Catalog Preview</p>
          <h2>Initial items this platform can support</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Inventory</th>
              </tr>
            </thead>
            <tbody>
              {catalogPreview.map((product) => (
                <tr key={product.sku}>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </AdminShell>
  );
}

