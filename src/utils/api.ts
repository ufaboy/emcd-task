import { API_URL } from '@/contants';
import type { ListQuery } from '@/interfaces';

/**
 * Fetches data from a specified URL and returns it as a JSON object.
 * This function is generic and can be used to fetch any type of data.
 *
 * @template T The expected type of the data to be returned.
 * @param {URL} url - The URL from which to fetch the data.
 * @returns {Promise<T>} A promise that resolves with the fetched data as a JSON object.
 * @throws {Error} Throws an error if the response is not OK (i.e., if the HTTP status is not in the 200-299 range).
 */
async function fetchData<T>(url: URL): Promise<T> {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}

/**
 * Constructs a URL with query parameters for the API call.
 *
 * @param {ListQuery} query - The query parameters to append to the URL.
 * @returns {URL} The constructed URL with appended query parameters.
 */
function getUrl(query: ListQuery): URL {
  const url = new URL(API_URL);
  for (const key in query) {
    const value = query[key];

    if (value !== '' && value !== undefined && value !== null) {
      url.searchParams.append(key, String(value));
    }
  }
  return url;
}

export { fetchData, getUrl };
