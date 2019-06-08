import React from 'react';

import './src/common.css';
import { ContextProvider } from './src/components/Context';

export const wrapRootElement = ({ element }) => <ContextProvider>{element}</ContextProvider>;
