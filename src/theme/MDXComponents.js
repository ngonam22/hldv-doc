import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import HoaHanhColor from '@site/src/components/commons/formats/HoaHanhColor';
import KimHanhColor from '@site/src/components/commons/formats/KimHanhColor';
import MocHanhColor from '@site/src/components/commons/formats/MocHanhColor';
import ThoHanhColor from '@site/src/components/commons/formats/ThoHanhColor';
import ThuyHanhColor from '@site/src/components/commons/formats/ThuyHanhColor';
export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
    HoaHanhColor,
    KimHanhColor,
    MocHanhColor,
    ThoHanhColor,
    ThuyHanhColor
};