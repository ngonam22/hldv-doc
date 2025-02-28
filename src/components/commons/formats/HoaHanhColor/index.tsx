import type { ReactNode } from 'react';

export default function HoaHanhColor({ children, fontWeight, gradient }: { children: ReactNode, fontWeight?: number, gradient?: string }): ReactNode {
    return (
        <span className={gradient !== 'false' ? 'text-gradient' : 'text-amber-400'} style={{
            fontWeight: fontWeight ?? 500,
            background: gradient !== 'false' ? "linear-gradient(to right, var(--orange-400), var(--orange-800))" : '',
            textShadow: gradient !== 'false' ?
                '0px 2px 2px rgba(0, 0, 0, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.05)' :
                '1px 1px 2px rgba(0, 0, 0, 0.2)'
        }}>
            {children}
        </span>
    );
}