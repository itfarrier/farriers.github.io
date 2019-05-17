import * as React from 'react';

import Layout from '../components/Layout';
import * as styles from './index.module.css';

const Index: React.FC = (props) => (
  <Layout location={props.location}>
    <header>
      <h1 className={styles.header}>РАСЧИСТКА И КОВКА ЛОШАДЕЙ</h1>
    </header>
    <main>
      <p>
        <a href={'tel:+79333330477'}>+7&nbsp;(933)&nbsp;333&#x2012;04&#x2012;77</a>,
        <a href={'tel:+79535852632'}>+7&nbsp;(953)&nbsp;585&#x2012;26&#x2012;32</a> &mdash; Вячеслав
        Штоль
      </p>
      <p>
        <a href={'tel:+79994416900'}>+7&nbsp;(999)&nbsp;441&#x2012;69&#x2012;00</a>,
        <a href={'tel:+375333197897'}>+375&nbsp;(33)&nbsp;319&#x2012;78&#x2012;97</a> &mdash;
        Дмитрий Подабед
      </p>
      <p>
        <a href={'mailto:info@farriers.ru'}>info@farriers.ru</a>
      </p>
    </main>
  </Layout>
);

export default Index;
