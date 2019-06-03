import { graphql, useStaticQuery } from 'gatsby';
import { addLocaleData, IntlProvider } from 'gatsby-plugin-intl';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/ru';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import * as React from 'react';
import * as en from 'react-intl/locale-data/en';
import * as ru from 'react-intl/locale-data/ru';

import Context from '../Context/Context';
import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';
import Main from '../Main';
import { ILangObject } from './interfaces';

addLocaleData([...en, ...ru]);

const Layout: React.FC = (props: any): React.ReactElement => {
  const {
    children,
    location,
    location: { pathname },
  } = props;

  const {
    site: {
      siteMetadata: {
        languages: { defaultLangKey, langs },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
          title
        }
      }
    }
  `);

  const langKey: string = getCurrentLangKey(langs, defaultLangKey, pathname);
  const homeLink: string = `/${langKey}/`;
  const langsMenu: ILangObject[] = getLangs(langs, langKey, getUrlForLang(homeLink, pathname));
  const i18nMessages: { [key: string]: string } = require(`../../data/messages/${langKey}`);

  return (
    <IntlProvider locale={navigator.language} messages={i18nMessages}>
      <Context.Consumer>
        {(context) => (
          <>
            <Head context={context} i18nMessages={i18nMessages} location={location} />
            <Header context={context} langsMenu={langsMenu} />
            <Main children={children} />
            <Footer />
          </>
        )}
      </Context.Consumer>
    </IntlProvider>
  );
};

export default Layout;
