import React, { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Loader } from './Loader';
import { fetchData } from '../utils/helpers';

export type portfolioItemData = {
  fetched?: boolean;
  loaded?: boolean;
  title?: string;
  body?: string;
  image?: string;
  url?: string;
};

export interface portfolioItemProps {
  endpoint: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onMount?: (node: HTMLElement) => void;
}

export const PortfolioItem: React.FunctionComponent<portfolioItemProps> = ({
  endpoint,
  open,
  setOpen,
  onMount,
}) => {
  const initialData: portfolioItemData = {
    fetched: false,
    loaded: false,
    title: '',
    body: '',
    image: '',
    url: ''
  };

  const [data, setData] = useState(initialData);

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
        // Get data from D9 API
        const data: portfolioItemData = await fetchData(endpoint);
        setTimeout(function () {
          console.log(data);
          // Make a note that the fetch completed
          data.fetched = true;
          // @ts-ignore - TODO: again write a custom API
          data.title = data.data.attributes.title;
          // @ts-ignore 
          data.url = data.data.attributes.field_url;
          // @ts-ignore 
          data.image = data.included[0].attributes.uri.url
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
      {open === true && (
        <section className="portfolio-item" ref={data.loaded ? loader : undefined}>
          {data.loaded === false && (
            <>
              <Loader></Loader>
            </>
          )}
          <span className="close" onClick={() => setOpen(false)}>
            ✕
          </span>
          {data.loaded !== false && (
            <>
              <h1>{data?.title}</h1>
              <img alt="portfolio" src={data?.image}></img>
              <p><a href={data?.url}>{data?.url}</a></p>
              <p className="portfolio-body">{data?.body}</p>
            </>
          )}

        </section>
      )
      }

    </>
  );
};
