import React from 'react';
import RootLayout from './src/components/RootLayout';
import './src/styles/global.scss';

export const wrapRootElement = ({element}) => {
    return (
        <RootLayout>{element}</RootLayout>
    )
};

