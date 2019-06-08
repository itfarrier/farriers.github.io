import { IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';

import * as styles from './SelectLanguage.module.css';

const SelectLanguage = (props: any): React.ReactElement => {
  return (
    <IntlContextConsumer>
      {(context: any): React.ReactElement[] => {
        const { languages } = context;

        return languages.map(
          (language: string): React.ReactElement => {
            const onClick = (): void => {
              return props.toggleLanguage(language);
            };

            return (
              <button className={styles.button} key={language} onClick={onClick}>
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
