import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';

const SelectLanguage: (props: any) => React.ReactElement = (props) => {
  return (
    <IntlContextConsumer>
      {(context: any): React.ReactElement[] => {
        const { languages } = context;

        return languages.map(
          (language: string): React.ReactElement => {
            const onClick = (): void => {
              return changeLocale(language);
            };

            return (
              <button key={language} onClick={onClick}>
                {language}
              </button>
            );
          },
        );
      }}
    </IntlContextConsumer>
  );
};

export default SelectLanguage;
