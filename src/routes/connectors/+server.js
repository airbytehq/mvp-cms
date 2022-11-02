import {
  json,
  // error
} from '@sveltejs/kit';

import res from '../../../source_files/results.json'

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ url }) {
  const showFull = url.searchParams.has('full') ?? false;

  // if (isNaN(d) || d < 0) {
  //   throw error(400, 'min and max must be numbers, and min must be less than max');
  // }

  if (showFull) {
    console.log('loading full results', url.searchParams.has('full'))
    return json(res); // full data dump
  } else {
    /** @type {Array<any>} */
    const res2 = []
    const keysToPreserve = ['name', 'dateAdded', 'displayName', 'description', 'websiteUrl', 'documentationUrl', 'iconUrl', 'releaseStage', 'connectorType'];
    for (const obj of res) {
      /** @type {Record<string, any>} */
      let temp = {};
      for (const key2 of keysToPreserve) {
        temp[key2] = obj[key2]
      }
      res2.push(temp)
    }
    return json(res2);
  }

}