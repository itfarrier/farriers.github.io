import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Context from '../Context/Context';
import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';
import Main from '../Main';

const Layout: React.FC = (props: any): React.ReactElement => {
  const { children, location } = props;

  const {
    site: {
      siteMetadata: {},
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Context.Consumer>
      {(context) => (
        <>
          <Head context={context} location={location} />
          <Header context={context} />
          <Main children={children} />
          <Footer />
        </>
      )}
    </Context.Consumer>
  );
};

export default Layout;
