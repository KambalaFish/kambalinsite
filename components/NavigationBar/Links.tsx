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
