import React, { useMemo } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { navPages } from './navPages';

interface LinksProps {
  render: (href: string, pageName: string, isCurrent: boolean) => React.ReactElement;
}

const Links = ({ render }: LinksProps): React.ReactElement => {
  const router: NextRouter = useRouter();

  const items = useMemo<React.ReactElement[]>(() => {
    return navPages.map(({ href, pageName }) =>
      render(href, pageName, router.pathname.endsWith(href))
    );
  }, [render, router.pathname]);

  return <>{items}</>;
};

export { Links };

/*if component maps navPages here without useMemo,
    then for example when user clicks on anchor link within a page (/#some-anchor)
    the component would have to map through navPages one more time (because router object updates),
    even though that would be unnecessary. useMemo prevents that behaviour and guarantees that
    navPages is mapped only on router.pathname change
  */
/*
generally speaking it's possible to omit render prop from dependency array here because,
first, in MenuItems (mobile menu) setItemsVisibility will always have the same reference,
so therefor there is no need to worry about "stale" value,
second, in NonMobileMenu in linksRenderer function there are no possible "stale" values as well.
But to follow the rule of thumb, I will leave render prop in dependency array.
But to avoid unnecessary execution of callback in useMemo
I have to make sure that render prop reference stays the same.
That's why I use useCallback in MenuItems (mobile menu)
and extract linksRenderer function outside NonMobileMenu.
*/
