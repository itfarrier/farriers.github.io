import { changeLocale, IntlProvider } from 'gatsby-plugin-intl';
import * as React from 'react';

import siteMetadata from '../../data/siteMetadata';
import { IContextInitialState } from './interfaces';

const initialState: IContextInitialState = {
  isDark: false,
  language: siteMetadata.defaultLanguage,
  // tslint:disable-next-line: no-empty
  toggleDark: () => {},
  // tslint:disable-next-line: no-empty
  toggleLanguage: () => {},
};

const Context: React.Context<IContextInitialState> = React.createContext<IContextInitialState>(
  initialState,
);

class ContextProvider extends React.PureComponent<any, IContextInitialState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isDark: false,
      language: siteMetadata.defaultLanguage,
      toggleDark: this.toggleDark,
      toggleLanguage: this.toggleLanguage,
    };
  }

  public componentDidMount() {
    const { isDark, language } = this.state;

    const isDarkFromLocalStorage: boolean = JSON.parse(localStorage.getItem('isDark'));
    const isLanguageFromLocalStorage: string = JSON.parse(localStorage.getItem('language'));

    if (isDarkFromLocalStorage && isLanguageFromLocalStorage) {
      this.setState({ isDark: isDarkFromLocalStorage, language: isLanguageFromLocalStorage });
    } else {
      localStorage.setItem('isDark', JSON.stringify(isDark));
      localStorage.setItem('language', JSON.stringify(language));
    }

    if (this.isSupportsDarkModeInMacOS()) {
      this.setState({ isDark: true });
      localStorage.setItem('isDark', JSON.stringify(isDark));
    }
  }

  public render() {
    const { children } = this.props;
    const { isDark, language } = this.state;

    console.log(this.props);

    return (
      <IntlProvider locale={navigator.language}>
        <Context.Provider
          value={{
            isDark,
            language,
            toggleDark: this.toggleDark,
            toggleLanguage: this.toggleLanguage,
          }}
        >
          {children}
        </Context.Provider>
      </IntlProvider>
    );
  }

  public toggleDark: IContextInitialState['toggleDark'] = (): void => {
    const isDark = !this.state.isDark;

    localStorage.setItem('isDark', JSON.stringify(isDark));
    this.setState({ isDark });
  };

  public toggleLanguage: IContextInitialState['toggleLanguage'] = (language) => {
    localStorage.setItem('language', JSON.stringify(language));
    this.setState({ language });
  };

  private isSupportsDarkModeInMacOS: () => boolean = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches === true;
}

export default Context;
export { ContextProvider };
