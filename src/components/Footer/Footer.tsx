import * as React from 'react';

import * as styles from './Footer.module.css';

const Footer: () => React.ReactElement = () => {
  return (
    <footer className={styles.footer}>
      <a href={'mailto:info@farriers.ru'}>info@farriers.ru</a>
    </footer>
  );
};

export default Footer;
