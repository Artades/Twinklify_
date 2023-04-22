import Head from 'next/head';
import React, { FC } from 'react';

interface MetaHeadProps {
    label: string,
}

const MetaHead:FC<MetaHeadProps> = ({label}) => {
    return (
			<Head>
				<title>{label}</title>
				<meta name="description" content="Expand your task managment with Twinklify" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		);
};

export default MetaHead;