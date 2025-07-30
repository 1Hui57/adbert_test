export async function GET() {
  const res = await fetch(
    "https://data.taipei/api/v1/dataset/ca5699b7-fe98-409b-847a-2b3252d9fe0d?scope=resourceAquire"
  );
  const data = await res.json();
  return Response.json(data);
}