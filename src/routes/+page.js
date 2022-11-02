/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(`/connectors`);
  const connectors = await res.json();

  return { connectors };
}