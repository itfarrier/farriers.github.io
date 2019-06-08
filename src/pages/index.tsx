import { injectIntl } from 'gatsby-plugin-intl';
import * as React from 'react';

import Layout from '../components/Layout';
import * as styles from './index.module.css';

const Index: React.FC = (props) => {
  const {
    intl: { formatMessage },
    location,
  } = props;

  return (
    <Layout location={location}>
      <article className={styles.article}>
        <header>
          <h1 className={styles.h1}>{formatMessage({ id: 'trimmingAndHorseshoeing' })}</h1>
        </header>
        <section>
          <p>
            <span className={styles.span}>
              {formatMessage({ id: 'vjacheslavShtol' })}
              <a
                aria-label={'instagram profile'}
                href={'https://instagram.com/vyacheslavstoll'}
                role={'link'}
              >
                <svg
                  aria-hidden={'true'}
                  className={styles.svg}
                  focusable={'false'}
                  role={'img'}
                  viewBox={'0 0 448 512'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <title>{'instagram icon'}</title>
                  <path
                    d={
                      'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                    }
                  />
                </svg>
              </a>
              <a aria-label={'vk profile'} href={'https://vk.com/id102449118'} role={'link'}>
                <svg
                  aria-hidden={'true'}
                  className={styles.svg}
                  focusable={'false'}
                  role={'img'}
                  viewBox={'0 0 576 512'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <title>{'vk icon'}</title>
                  <path
                    d={
                      'M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z'
                    }
                  />
                </svg>
              </a>
            </span>
          </p>
          <p className={styles.p}>
            <a
              aria-label={'mobile phone number'}
              className={styles.a}
              href={'tel:+79333330477'}
              role={'link'}
            >
              +7&nbsp;(933)&nbsp;333&#x2012;04&#x2012;77
            </a>
            <a
              aria-label={'mobile phone number'}
              className={styles.a}
              href={'tel:+79535852632'}
              role={'link'}
            >
              +7&nbsp;(953)&nbsp;585&#x2012;26&#x2012;32
            </a>
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default injectIntl(Index);
