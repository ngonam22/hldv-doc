import type {ReactNode} from 'react';

export default function HoaHanhColor({children, fontWeight, gradient}: {children: ReactNode, fontWeight?: number, gradient?: string}): ReactNode {
    return (
        <span className={gradient !== 'false' ? 'text-gradient' : 'text-amber-400'} style={{
            fontWeight: fontWeight ?? 500, 
            background: gradient !== 'false' ? "linear-gradient(to right, var(--orange-300), var(--orange-500))" : '',
        }}>
            {children}
        </span>
    );
}