import { Link } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import SelectLanguage from '../SelectLanguage';

const Header: React.FC = (props: any): React.ReactElement => {
  const {
    context: { isDark, language, toggleDark, toggleLanguage },
    homeLink,
    langsMenu,
  } = props;

  const theme = isDark ? 'dark' : 'light';

  return (
    <header>
      <Helmet htmlAttributes={{ theme }} />
      <nav>
        <button onClick={toggleDark}>{theme}</button>
        <SelectLanguage langsMenu={langsMenu} language={language} toggleLanguage={toggleLanguage} />
      </nav>
    </header>
  );
};

export default Header;
