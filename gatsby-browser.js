import React from 'react';
import RootLayout from './src/components/RootLayout';
import './src/styles/normalize.scss';
import './src/styles/global.scss';
require("prismjs/themes/prism-tomorrow.css");
require("prismjs/plugins/command-line/prism-command-line.css");

export const wrapRootElement = ({element}) => {
  return (
    <RootLayout>{element}</RootLayout>
  )
};

