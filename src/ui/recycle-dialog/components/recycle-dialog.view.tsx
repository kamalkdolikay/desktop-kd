import { memo } from 'react';
import styles from '../styles/recycle-dialog.module.css';
import type { RecycleDialogViewProps } from '../interface/recycle-dialog.interface';
import { RECYCLE_DIALOG_ID } from '../constants/recycle-dialog.constant';

const RecycleDialogView: React.FC<RecycleDialogViewProps> = ({
  onClose,
  dialogRef,
  position,
  handleMouseDown,
  data,
}) => {
  return (
    <dialog
      open
      ref={dialogRef}
      id={RECYCLE_DIALOG_ID}
      className={`dialog ${styles['dialog-recycle']} flex-column`}
      aria-labelledby="recycle-dialog-title"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        margin: 0,
      }}
    >
      {/* Standard Draggable Header */}
      <header
        className="dialog__header flex-row"
        onMouseDown={handleMouseDown}
        style={{ cursor: 'move' }}
      >
        <h4 className="dialog__title" id="recycle-dialog-title">
          {data.title}
        </h4>
        <div
          className="dialog__close-btn"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close recycle bin"
        >
          X
        </div>
      </header>

      {/* Content Body */}
      <main className={styles['dialog-recycle__content']}>
        <div className={styles['file-grid']}>
          {data.items.map((item) => (
            <div key={item.id} className={styles['deleted-item']}>
              <img src={item.iconSrc} alt={item.label} className={styles['item-icon']} />
              <span className={styles['item-label']}>{item.label}</span>
              <span className={styles['item-details']}>{item.details}</span>
            </div>
          ))}
        </div>
      </main>
    </dialog>
  );
};

export default memo(RecycleDialogView);
