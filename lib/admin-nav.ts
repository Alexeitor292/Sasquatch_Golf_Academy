export type AdminNavItem = {
  href: string;
  label: string;
  description: string;
};

export const adminNav: AdminNavItem[] = [
  {
    href: "/admin",
    label: "Overview",
    description: "Business health, publishing workflow, and launch status.",
  },
  {
    href: "/admin/pages",
    label: "Pages",
    description: "Structured page builder, revisions, templates, and publish controls.",
  },
  {
    href: "/admin/catalog",
    label: "Catalog",
    description: "Products, memberships, services, bundles, and merchandising.",
  },
  {
    href: "/admin/inventory",
    label: "Inventory",
    description: "Locations, stock levels, reservations, and reorder thresholds.",
  },
  {
    href: "/admin/orders",
    label: "Orders",
    description: "Order lifecycle, payments, fulfillment, and refunds.",
  },
  {
    href: "/admin/customers",
    label: "Customers",
    description: "Profiles, memberships, activity history, and account roles.",
  },
  {
    href: "/admin/payments",
    label: "Payments",
    description: "Provider setup, settlement tracking, and webhook health.",
  },
  {
    href: "/admin/settings",
    label: "Settings",
    description: "Branding, domains, themes, media storage, and integrations.",
  },
];

