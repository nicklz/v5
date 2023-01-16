import React, { useCallback, useEffect, useState } from 'react';
import { PortfolioListItem } from './PortfolioListItem';
import { Loader } from './Loader';
import { fetchData } from '../utils/helpers';

export type portfolioItemData = {
  uuid: string;
  title: string;
  image: string;
};

export type listingData = {
  fetched?: boolean;
  loaded?: boolean;
  list?: portfolioItemData[];
};

export interface listingProps {
  endpoint: string;
  onMount?: (node: HTMLElement) => void;
}

export const Listing: React.FunctionComponent<listingProps> = ({
  endpoint,
  onMount,
}) => {
  const initialData: listingData = {
    fetched: false,
    loaded: false,
    list: []
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

  useEffect(() => {
    if (!data.fetched) {
      const getData = async () => {
        // Get data from D9 API
        const data: listingData = await fetchData(endpoint);

        setTimeout(function () {
          // Make a note that the fetch completed
          data.fetched = true;

          let listData: any = [];
          // @ts-ignore - TODO: write a custom API that is less messy
          data.data.forEach((item, index) => {
            let values = item.attributes;

            listData[index] = {
              title: values.title,
              body: values.body.processed,
              uuid: item.id
            }
          });

          // @ts-ignore 
          data.included.forEach((item, index) => {
            listData[index]['image'] = item.attributes.uri.url;
          });

          data.list = listData;
          setData(data);
        }, 2000);
      };

      getData();
    }
  }, [data]);

  return (
    <>
      <section className="listing" ref={data.loaded ? loader : undefined}>
        {data.loaded === false && (
          <>
            <Loader></Loader>
          </>
        )}
        {data.loaded !== false && (
          <>
            <h1>Portfolio</h1>
            <h5>Total Projects: {data?.list?.length}</h5>
            <ul>
              {data?.list?.map((item: portfolioItemData) => {
                const { uuid, title, image } = item;
                return (
                  <PortfolioListItem
                    uuid={uuid}
                    title={title}
                    image={image}
                  />
                );
              })}
            </ul>
          </>
        )}
      </section>
    </>
  );
};
