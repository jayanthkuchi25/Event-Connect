export async function semanticSearch(query: string) {
  const res = await fetch(`http://localhost:8000/api/semantic-search?query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Search failed");
  const data = await res.json();
  return data.results; // Array of matched events
}
