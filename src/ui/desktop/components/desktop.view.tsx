import { memo } from 'react';
import type { DesktopViewProps } from '../interface/desktop.interface';
import styles from '../styles/desktop.module.css';

/**
 * Renders the desktop view with draggable icons that trigger actions on double-click.
 */
const DesktopView: React.FC<DesktopViewProps> = ({
  icons,
  positions,
  onMouseDown,
  onIconClick,
  getIconRef,
}) => {
  return (
    <main className={styles.desktop} aria-label="Desktop">
      <section
        id="desktop-icons-container"
        className={styles['desktop__icons-container']}
      >
        {icons.map((icon) => {
          const position = positions.find((pos) => pos.id === icon.id);
          return (
            <div
              key={icon.id}
              className={`${styles['desktop__icon']} flex-column`}
              style={{
                left: `${position?.left ?? 0}px`,
                top: `${position?.top ?? 0}px`,
              }}
              data-dialog={icon.dialogId}
              ref={getIconRef(icon.id)}
              onMouseDown={(e) => onMouseDown(e, icon.id)}
              onDoubleClick={() => onIconClick(icon.id)}
              role="button"
              tabIndex={0}
              aria-label={icon.label}
              aria-describedby={`double-click-${icon.id}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onIconClick(icon.id);
                }
              }}
            >
              <img src={icon.iconSrc} alt={icon.altText} />
              <span className={styles['desktop__icon-label']}>
                {icon.label}
              </span>
              <span id={`double-click-${icon.id}`} className="sr-only">
                Double-click to open {icon.label}
              </span>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default memo(DesktopView);
