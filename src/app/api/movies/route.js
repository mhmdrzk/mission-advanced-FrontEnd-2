import movieImages from "@/components/data/movieData"; // pakai alias @

export async function GET() {
  return Response.json(movieImages);
}
