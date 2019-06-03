import * as React from 'react';
import Helmet from 'react-helmet';

import SelectLanguage from '../SelectLanguage';
import { IProps } from './interfaces';

const Header: (props: IProps) => React.ReactElement = (props) => {
  const {
    context: { isDark, toggleDark, toggleLanguage },
  } = props;

  const theme = isDark ? 'dark' : 'light';

  return (
    <header>
      <Helmet htmlAttributes={{ theme }} />
      <nav>
        <button onClick={toggleDark}>{theme}</button>
        <SelectLanguage toggleLanguage={toggleLanguage} />
      </nav>
    </header>
  );
};

export default Header;
