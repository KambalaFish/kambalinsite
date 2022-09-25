import React from 'react';
import { useRouter } from 'next/router';
/*The main purpose of CustomLink is to scroll to top of the page after clicking on link.
  The reason I implemented it is that main container in Layout component has fixed 100vh height
  and has overflow-y: auto. So usual Link nextjs component scrolls to top of html element,
  but in our case with fixed height in main component (in Layout), usual Link component
  thinks that scroll is already on top of the page.
  So CustomLink helps to avoid this behaviour and scrolls on top of Main container in Layout.
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
