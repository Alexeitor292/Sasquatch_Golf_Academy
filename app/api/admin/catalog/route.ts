import { catalogPreview } from "@/lib/mock-data";

export async function GET() {
  return Response.json({
    items: catalogPreview,
  });
}

