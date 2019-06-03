import { injectIntl } from 'gatsby-plugin-intl';
import * as React from 'react';

import Layout from '../components/Layout';
import * as styles from './index.module.css';

const Index: React.FC = (props) => {
  const {
    intl: { formatMessage },
    location,
  } = props;

  return (
    <Layout location={location}>
      <article>
        <header>
          <h1 className={styles.header}>{formatMessage({ id: 'horseshoeingAndTrimming' })}</h1>
        </header>
        <section>
          <a href={'tel:+79333330477'}>+7&nbsp;(933)&nbsp;333&#x2012;04&#x2012;77</a>,&#x20;
          <a href={'tel:+79535852632'}>+7&nbsp;(953)&nbsp;585&#x2012;26&#x2012;32</a>
          &thinsp;&mdash;&thinsp;{formatMessage({ id: 'vjacheslavShtol' })}
        </section>
        <section>
          <a href={'tel:+375333197897'}>+375&nbsp;(33)&nbsp;319&#x2012;78&#x2012;97</a>,&#x20;
          <a href={'tel:+79994416900'}>+7&nbsp;(999)&nbsp;441&#x2012;69&#x2012;00</a>
          &thinsp;&mdash;&thinsp;{formatMessage({ id: 'dmitrijPodabed' })}
        </section>
      </article>
    </Layout>
  );
};

export default injectIntl(Index);
