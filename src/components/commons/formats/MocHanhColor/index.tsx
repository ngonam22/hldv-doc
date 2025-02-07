import type {ReactNode} from 'react';

export default function MocHanhColor({children, fontWeight, gradient}: {children: ReactNode, fontWeight?: number, gradient?: string}): ReactNode {
    return (
        <span className={gradient !== 'false' ? 'text-gradient' : 'text-emerald-400'} style={{
            fontWeight: fontWeight ?? 500, 
            background: gradient !== 'false' ? "linear-gradient(to right, var(--emerald-400), var(--emerald-600))" : '',
        }}>
            {children}
        </span>
    );
}