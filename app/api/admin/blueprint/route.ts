import { sectionTemplates } from "@/lib/platform/section-templates";

export async function GET() {
  return Response.json({
    templates: sectionTemplates,
  });
}

