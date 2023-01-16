import React, { useCallback, useEffect, useState } from 'react';

import { PortfolioItem } from './PortfolioItem';

export interface portfolioListItemProps {
  uuid: string;
  title: string;
  image: string;
}

export const PortfolioListItem: React.FunctionComponent<portfolioListItemProps> = ({
  uuid,
  title,
  image
}) => {


  const [open, setOpen] = useState(false);

  return (
    <>
      <li>
        <h3 onClick={() => setOpen(true)} >{title}</h3>
        <img onClick={() => setOpen(true)} src={image}></img>
        {open === true && (
          <>
            <PortfolioItem open={open} setOpen={setOpen} endpoint={`https://nicklz.com/v5/api/jsonapi/node/portfolio/${uuid}?include=field_portfolio_image`}></PortfolioItem>
          </>
        )}
      </li>
    </>
  );
};
