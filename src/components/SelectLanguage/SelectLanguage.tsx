import { navigate } from 'gatsby';
import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';

import { ILangObject } from '../Layout/interfaces';

const SelectLanguage: (props: any) => React.ReactElement = (props) => {
  const languageName = {
    en: 'English',
    ru: 'Russian',
  };

  return (
    <IntlContextConsumer>
      {(context): React.ReactElement[] => {
        const { languages, language: currentLocale } = context;

        return languages.map((language: string) => {
          const onClick = (): void => {
            return changeLocale(language);
          };

          return (
            <button key={language} onClick={onClick}>
              {languageName[language]}
            </button>
          );
        });
      }}
    </IntlContextConsumer>
  );
};

export default SelectLanguage;
