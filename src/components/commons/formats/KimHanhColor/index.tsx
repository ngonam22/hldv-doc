import type {ReactNode} from 'react';

export default function KimHanhColor({children, fontWeight, gradient}: {children: ReactNode, fontWeight?: number, gradient?: string}): ReactNode {
    return (
        <span className={gradient !== 'false' ? 'text-gradient' : 'text-zinc-400'} style={{
            fontWeight: fontWeight ?? 500, 
            background: gradient !== 'false' ? "linear-gradient(to right, var(--zinc-300), var(--zinc-500))" : '',
        }}>
            {children}
        </span>
    );
}