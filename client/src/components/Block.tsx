// @ts-nocheck

import React, { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Loader } from './Loader';
import { fetchData } from '../utils/helpers';

export type blockData = {
  fetched?: boolean;
  loaded?: boolean;
  title?: string;
  body?: string;
};

export interface blockProps {
  endpoint: string;
  onMount?: (node: HTMLElement) => void;
}

export const Block: React.FunctionComponent<blockProps> = ({
  endpoint,
  onMount,
}) => {
  const initialData: blockData = {
    fetched: false,
    loaded: false,
    title: '',
    body: '',
  };

  const [data, setData] = useState(initialData);

  // If there's no data, call the API for menu data
  const loader = useCallback(
    (node: any) => {
      if (data.fetched) {
        if (onMount) onMount(node);
      }
    },
    [data.fetched]
  );

  // If there's no data, call the API for menu data
  useEffect(() => {
    if (!data.fetched) {
      const getData = async () => {
        // Get menu data from D9 API
        const data: blockData = await fetchData(endpoint);
        // I artificially slow things down because I like looking at the loader animation ;)
        setTimeout(function () {
          // Make a note that the fetch completed
          data.fetched = true;
          // @ts-ignore - TODO: build a cleaner api / not use out of the box messy jsonapi
          data.title = data.data.attributes.title;
          // @ts-ignore 
          data.body = parse(data.data.attributes.body.processed);

          setData(data);
        }, 2000);
      };

      getData();
    }
  }, [data]);

  return (
    <>
      <section className="block" ref={data.loaded ? loader : undefined}>
        {data.loaded === false && (
          <>
            <Loader></Loader>
          </>
        )}
        {data.loaded !== false && (
          <>
            <h1>{data?.title}</h1>
            <section>{data?.body}</section>
          </>
        )}
      </section>
    </>
  );
};
