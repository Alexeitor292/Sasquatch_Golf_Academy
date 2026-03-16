export async function GET() {
  return Response.json({
    status: "ok",
    service: "sasquatch-platform",
    timestamp: new Date().toISOString(),
  });
}

