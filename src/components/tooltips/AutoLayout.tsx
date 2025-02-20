import React from 'react';
// import { useDoc } from '@docusaurus/plugin-content-docs/client';

function AutoLayout({ children, filePath = "", metadata }) {

    let layout: string;
    const layoutList: string[] = ['ActionLayout', 'ComponentLayout', 'DefaultLayout']

    if (filePath.startsWith('./actions/')) {
        layout = 'ActionLayout';
    } else if (filePath.startsWith('./components/')) {
        layout = 'ComponentLayout';
    } else {
        layout = 'DefaultLayout'; // Fallback layout
    }

    // overide the layout variable, if metadata has a customLayout field which is desinated for a layout name
    if (metadata?.customLayout && layoutList.includes(metadata.customLayout)) {
        layout = metadata.customLayout;
    }


    // dynamically import the React component based on the layout name
    const Layout = require(`./layouts/${layout}`).default;
  
    if (!Layout) {
        return <>{children}</>
    }

    return <Layout metadata={metadata}>{children}</Layout>
}

export default AutoLayout;