import type { ReactNode } from 'react';

export default function ThoHanhColor({ children, fontWeight, gradient }: { children: ReactNode, fontWeight?: number, gradient?: string }): ReactNode {
    return (
        <span className={gradient !== 'false' ? 'text-gradient' : 'text-sky-600'} style={{
            fontWeight: fontWeight ?? 500,
            background: gradient !== 'false' ? "linear-gradient(to right, var(--sky-500), var(--sky-700))" : '',
            textShadow: gradient !== 'false' ?
                '0px 1px 2px rgba(0, 0, 0, 0.15), 1px 1px 1px rgba(255, 255, 255, 0.1)' :
                '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)'
        }}>
            {children}
        </span>
    );
}