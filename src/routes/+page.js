
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  // const showInternal = url.searchParams.has('internal') ?? false;
  const res = await fetch(`/connectors?internal`);
  const connectors = await res.json();

  return { connectors };
}