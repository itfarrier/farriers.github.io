import * as React from 'react';

const Main: (props: any) => React.ReactElement = (props) => {
  return <main>{props.children}</main>;
};

export default Main;
