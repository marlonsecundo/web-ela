import React from 'react';

import Header from './header';
import GlobalStyles from '../styles/global';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC = ({ children }: Props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <footer />
    </>
  );
};

export default Layout;
