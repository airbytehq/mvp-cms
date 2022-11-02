import { json, error } from '@sveltejs/kit';

import res from '../../../../source_files/results.json'

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ params }) {
  console.log('serving', params.connector_name);
  // find the connector that matches the name

  const connector = res.find((connector) => connector.name === params.connector_name);
  // console.log({ connector })
  if (connector) {
    return json(connector);
  } else {
    throw error(404, `Connector "${params?.connector_name}" not found. Check that you have the right name?`);
  }
}