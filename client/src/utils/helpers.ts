export interface fetchDataPropsLite {
  endpoint?: string;
}

/**
 * fetchData
 */
export const fetchData = async (
  endpoint: string
) => {
  // eslint-disable-next-line no-undef
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
