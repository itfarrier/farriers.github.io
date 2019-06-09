import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';

import Button from '../Button';
import * as styles from './SelectLanguage.module.css';

const SelectLanguage = (props: any): React.ReactElement => {
  const {
    intl: { formatMessage },
  } = props;

  return (
    <IntlContextConsumer>
      {(context: any): React.ReactElement[] => {
        return context.languages.map(
          (language: string): React.ReactElement => {
            const onClick = (): void => {
              return props.toggleLanguage(language);
            };

            return (
              <Button
                className={styles.button}
                key={language}
                onClick={onClick}
                text={formatMessage({ id: language })}
              />
            );
          },
        );
      }}
    </IntlContextConsumer>
  );
};

export default injectIntl(SelectLanguage);
