import { navigate } from 'gatsby';
import * as React from 'react';

import { ILangObject } from '../Layout/interfaces';

const SelectLanguage: (props: any) => React.ReactElement = (props) => {
  const { langsMenu, toggleLanguage } = props;

  const links: React.ReactElement[] = langsMenu.map(
    (lang: ILangObject): React.ReactElement => {
      const onClick: () => void = () => {
        toggleLanguage(lang.langKey);
        navigate(lang.link);
      };

      return (
        <button key={lang.langKey} onClick={onClick}>
          {lang.langKey}
        </button>
      );
    },
  );

  return <>{links}</>;
};

export default SelectLanguage;
