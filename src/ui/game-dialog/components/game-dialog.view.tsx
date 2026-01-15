import { memo } from 'react';
import styles from '../styles/game-dialog.module.css';
import type { GameDialogViewProps } from '../interface/game-dialog.interface';
import { GAME_DIALOG_ID } from '../constants/game-dialog.constant';

const GameDialogView: React.FC<GameDialogViewProps> = ({
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
      id={GAME_DIALOG_ID}
      className={`dialog ${styles['dialog-game']} flex-column`}
      aria-labelledby="game-dialog-title"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        margin: 0,
      }}
    >
      {/* Header */}
      <div
        className="dialog__header flex-row"
        onMouseDown={handleMouseDown}
        style={{ cursor: 'move' }}
      >
        <h4 className="dialog__title" id="game-dialog-title">
          {data.title}
        </h4>
        <div
          className="dialog__close-btn"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close game"
        >
          X
        </div>
      </div>

      {/* Game Content */}
      <iframe
        src={data.gameUrl}
        title={data.title}
        className={styles['dialog-game__frame']}
        allow="autoplay; fullscreen; gamepad"
        loading="lazy"
      />
    </dialog>
  );
};

export default memo(GameDialogView);
