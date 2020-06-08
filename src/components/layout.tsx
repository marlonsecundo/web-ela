import React from 'react';

import Header from './header';
import Footer from './footer';
import GlobalStyles from '../styles/global';

interface Props {
  children?: React.ReactNode;
  backcolor?: boolean;
}

const Layout: React.FC<Props> = ({ children, backcolor }) =>
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `);

  (
    <>
      <GlobalStyles />
      <Header withBackcolor={backcolor} />
      {children}
      <Footer />
    </>
  );
export default Layout;
