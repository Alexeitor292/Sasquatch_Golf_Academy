import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  MembershipRole,
  PageStatus,
  PrismaClient,
  ProductStatus,
  SiteStatus,
} from "./generated/client/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "owner@sasquatchgolfacademy.com" },
    update: {},
    create: {
      email: "owner@sasquatchgolfacademy.com",
      name: "Sasquatch Owner",
    },
  });

  const organization = await prisma.organization.upsert({
    where: { slug: "sasquatch-golf-academy" },
    update: {},
    create: {
      name: "Sasquatch Golf Academy",
      slug: "sasquatch-golf-academy",
      memberships: {
        create: {
          userId: admin.id,
          role: MembershipRole.OWNER,
        },
      },
    },
  });

  const site = await prisma.site.upsert({
    where: { slug: "sasquatch-main-site" },
    update: {},
    create: {
      organizationId: organization.id,
      name: "Sasquatch Main Site",
      slug: "sasquatch-main-site",
      primaryDomain: "sasquatchgolfacademy.com",
      status: SiteStatus.DRAFT,
      settings: {
        brandName: "Sasquatch Golf Academy",
        supportEmail: "hello@sasquatchgolfacademy.com",
      },
      theme: {
        palette: {
          primary: "#11447b",
          surface: "#07111e",
          text: "#f6f8fc",
        },
      },
    },
  });

  const homePage = await prisma.page.upsert({
    where: {
      siteId_slug: {
        siteId: site.id,
        slug: "",
      },
    },
    update: {},
    create: {
      siteId: site.id,
      name: "Home",
      slug: "",
      status: PageStatus.DRAFT,
      seo: {
        title: "Sasquatch Golf Academy",
        description: "Indoor golf, lessons, fittings, and event hosting.",
      },
    },
  });

  await prisma.pageRevision.upsert({
    where: {
      pageId_version: {
        pageId: homePage.id,
        version: 1,
      },
    },
    update: {},
    create: {
      pageId: homePage.id,
      createdById: admin.id,
      version: 1,
      title: "Homepage Draft",
      content: {
        sections: [
          {
            id: "hero-video",
            type: "heroVideo",
            props: {
              heading: "Premium golf coaching and simulator experiences.",
              subheading: "Lessons, club work, indoor play, and events in one modern destination.",
            },
          },
        ],
      },
    },
  });

  await prisma.product.upsert({
    where: {
      siteId_slug: {
        siteId: site.id,
        slug: "founders-membership",
      },
    },
    update: {},
    create: {
      siteId: site.id,
      slug: "founders-membership",
      name: "Founders Membership",
      description: "Unlimited simulator access, preferred booking, and member pricing.",
      status: ProductStatus.ACTIVE,
      variants: {
        create: {
          title: "Monthly Membership",
          sku: "SGA-MEMBER-FOUNDERS",
          priceCents: 22500,
          currency: "USD",
          isDefault: true,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
