import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Context from '../Context/Context';
import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';
import Main from '../Main';
import * as styles from './Layout.module.css';

const Layout: React.FC = (props: any): React.ReactElement => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div className={styles.container}>
            <Head context={context} location={props.location} />
            <Header context={context} />
            <Main children={props.children} />
            <Footer />
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Layout;
