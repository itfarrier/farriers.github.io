import { injectIntl } from 'gatsby-plugin-intl';
import * as React from 'react';
import Helmet from 'react-helmet';

import SelectLanguage from '../SelectLanguage';
import * as styles from './Header.module.css';
import { IProps } from './interfaces';

const Header: (props: IProps) => React.ReactElement = (props) => {
  const {
    context: { isDark, toggleDark, toggleLanguage },
    intl: { formatMessage },
  } = props;

  const themeName = isDark ? formatMessage({ id: 'dark' }) : formatMessage({ id: 'light' });
  const themeAttribute = isDark ? 'dark' : 'light';

  return (
    <header className={styles.header}>
      <Helmet htmlAttributes={{ theme: themeAttribute }} />
      <nav>
        <button className={styles.button} onClick={toggleDark}>
          {themeName}
        </button>
        <SelectLanguage toggleLanguage={toggleLanguage} />
      </nav>
    </header>
  );
};

export default injectIntl(Header);
