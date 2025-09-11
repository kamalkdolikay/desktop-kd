import { memo } from 'react';
import styles from '../styles/portfolio-dialog.module.css';
import { PORTFOLIO_DIALOG_ID } from '../constants/portfolio-dialog.constant';
import type { PortfolioDialogViewProps } from '../interface/portfolio-dialog.interface';

/**
 * View component for the portfolio dialog, displaying a draggable dialog with project folders.
 */
const PortfolioDialogView: React.FC<PortfolioDialogViewProps> = ({
  dialogRef,
  position,
  handleMouseDown,
  closeDialog,
  projects,
  onFolderClick,
  onViewButtonClick,
  selectedProject,
}) => {
  return (
    <dialog
      open
      ref={dialogRef}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        margin: 0,
      }}
      id={PORTFOLIO_DIALOG_ID}
      className={`dialog ${styles['dialog-portfolio']} flex-column`}
      aria-labelledby="portfolio-dialog-title"
      aria-describedby="portfolio-dialog-desc"
    >
      <header
        className="dialog__header flex-row"
        onMouseDown={handleMouseDown}
        style={{ cursor: 'move' }}
        role="region"
        aria-label="Drag to move dialog"
      >
        <h4 className="dialog__title">PORTFOLIO</h4>
        <div
          className="dialog__close-btn"
          onClick={closeDialog}
          aria-label="Close portfolio dialog"
        >
          X
        </div>
      </header>

      <main className="dialog-portfolio__content flex-column">
        <div className={`${styles['dialog-portfolio__subtitle']} flex-row`}>Select a project</div>
        <div className={styles['dialog-portfolio__preview']}>
          <section className={`${styles['preview-panel']} flex-row`}>
            <div className={styles['preview-panel__info']}>
              <div className={styles['preview-panel__title']}>{selectedProject.title}</div>
              <div
                className={styles['preview-panel__view-btn']}
                aria-label={`View ${selectedProject.title} project details`}
                onClick={() => onViewButtonClick(selectedProject)}
              >
                View Project
              </div>
            </div>
            <div className={styles['preview-panel__spacer']}></div>
          </section>

          <section
            className={`${styles['preview-select']} flex-row`}
            role="listbox"
            aria-label="Project folders"
          >
            <figure className={styles['preview-select__image']}>
              <img
                id="preview-image"
                src={selectedProject.imgSrc}
                alt={`Preview for ${selectedProject.title} project`}
              />
            </figure>

            <div
              className={`${styles['preview-select__folders-column']} flex-column`}
              role="group"
              aria-label="First column of project folders"
            >
              {projects.slice(0, 4).map((project) => (
                <img
                  key={project.id}
                  src={project.folderIconSrc}
                  className={styles['folder-icon']}
                  data-title={project.title}
                  data-img={project.imgSrc}
                  data-project={project.dialogId}
                  onClick={() => onFolderClick(project)}
                  alt={project.altText}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${project.title} project`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onFolderClick(project);
                    }
                  }}
                />
              ))}
            </div>

            <div className={`${styles['preview-select__folders-column']} flex-column`}>
              {projects.slice(4).map((project) => (
                <img
                  key={project.id}
                  src={project.folderIconSrc}
                  className={styles['folder-icon']}
                  data-title={project.title}
                  data-img={project.imgSrc}
                  data-project={project.dialogId}
                  onClick={() => onFolderClick(project)}
                  alt={project.altText}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${project.title} project`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onFolderClick(project);
                    }
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </dialog>
  );
};

export default memo(PortfolioDialogView);
