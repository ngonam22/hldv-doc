
function ActionLayout({children, metadata}) {
    // const img = require(metadata?.titleIcon).default
    return <>
        <h3>{metadata?.title}</h3>
        <div>
            <strong>Kiểm Tra:</strong> 
            <span>{metadata?.kiemTra}</span>
        </div>
        {children}
    </>
}

export default ActionLayout;