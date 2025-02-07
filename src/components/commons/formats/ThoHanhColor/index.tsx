import type {ReactNode} from 'react';

export default function ThoHanhColor({children, fontWeight, gradient}: {children: ReactNode, fontWeight?: number, gradient?: string}): ReactNode {
    return (
        <span className={gradient !== 'false' ? 'text-gradient' : 'text-stone-400'} style={{
            fontWeight: fontWeight ?? 500, 
            background: gradient !== 'false' ? "linear-gradient(to right, var(--stone-400), var(--stone-600))" : '',
        }}>
            {children}
        </span>
    );
}