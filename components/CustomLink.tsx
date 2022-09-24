import React from 'react';
import { useRouter } from 'next/router';
/*That CustomLink scrolls to top of the page after clicking on link.
  The reason I implemented it is that main container in Layout component is 100vh
  and has overflow-y: auto,
  so usual Link nextjs component thinks that it is always on top of the page.
* */
const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: (fn: (event: React.SyntheticEvent) => void) => React.ReactElement;
}): React.ReactElement => {
  const router = useRouter();
  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    router.push(href).then(
      (isSuccess) => {
        if (isSuccess) {
          const mainContainer = document.querySelector('#mainContainer');
          if (mainContainer) {
            mainContainer.scrollTop = 0;
          }
        }
      },
      (reason) => {
        console.error(reason);
      }
    );
  };

  return <>{children(onClick)}</>;
};

export { CustomLink };
