import React from 'react';
import Admonition from '@theme-original/Admonition';

export default function AdmonitionWrapper(props) {
    let title = props?.title;
    switch(props.type) {
        case 'info':
            title = title ?? 'Thông Tin';
            break;
        case 'warning':
            title = title ?? 'Lưu Ý';
            break;
        case 'danger':
            title = title ?? 'Nguy Hiểm';
            break;
        case 'tip':
            title = title ?? 'Tip';
            break;
        case 'note':
            title = title ?? 'Ghi Chú';
            break;
    }
    return <Admonition {...props} title={title} />;
}