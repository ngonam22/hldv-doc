import useBaseUrl from '@docusaurus/useBaseUrl';
import style from './action.module.scss';

function ActionLayout({children, metadata}) {
    const imgUrl = useBaseUrl(metadata?.titleIcon)
    return <>
        <div className={style.actionStatBlock__header}>
            <img className={style.actionStatBlock__img} src={imgUrl} alt="Title Icon" />
            <h3 className={style.actionStatBlock__title}>{metadata?.title}</h3>    
        </div>
        
        {metadata?.brief && <p className={style.actionStatBlock__brief}>{metadata?.brief}</p>}

        {metadata?.tinhTrang && (
            <div className={style.actionStatBlock__statHolder}>
                <strong className={style.actionStatBlock__statLabel}>Tính Trạng:</strong> 
                <span>{metadata?.tinhTrang}</span>
            </div>
        )}

        {metadata?.kiemTra && (
            <div className={style.actionStatBlock__statHolder}>
                <strong className={style.actionStatBlock__statLabel}>Kiểm Tra:</strong> 
                <span>{metadata?.kiemTra}</span>
            </div>
        )}
        
        {metadata?.doKho && (
            <div className={style.actionStatBlock__statHolder}>
                <strong className={style.actionStatBlock__statLabel}>Độ Khó:</strong> 
                <span>{metadata?.doKho}</span>
            </div>
        )}

        {metadata?.phamVi && (
            <div className={style.actionStatBlock__statHolder}>
                <strong className={style.actionStatBlock__statLabel}>Phạm Vi:</strong> 
                <span>{metadata?.phamVi}</span>
            </div>
        )}

        {metadata?.thanhCong && (
            <div className={style.actionStatBlock__statHolder}>
                <strong className={style.actionStatBlock__statLabel}>Thành Công:</strong> 
                <span>{metadata?.thanhCong}</span>
            </div>
        )}

        {children}
    </>
}

export default ActionLayout;