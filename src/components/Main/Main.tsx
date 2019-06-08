import * as React from 'react';

import * as styles from './Main.module.css';

const Main: (props: any) => React.ReactElement = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default Main;
