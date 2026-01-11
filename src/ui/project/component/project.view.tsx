import React from 'react';
import styles from '../styles/project.module.css';
import type { ProjectViewProps } from '../interface/project.interface';

const ProjectView: React.FC<ProjectViewProps> = ({ project, onClose }) => {
  return (
    <dialog open id="project-dialog" className={`${styles['dialog-project']} flex-column`}>
      <header className="dialog__header flex-row">
        <div className="dialog__title">{project.dialogTitle}</div>
        <div
          onClick={onClose}
          className="dialog__close-btn"
          role="button"
          tabIndex={0}
          aria-label="Close project details"
        >
          X
        </div>
      </header>

      <main className={`${styles['dialog-project__content']} flex-column`}>
        {/* Banner */}
        <figure className={styles['dialog-project__banner']}>
          <img src={project.banner.src} alt={project.banner.alt} />
        </figure>

        {/* Background */}
        <section className={`${styles['dialog-project__background']} flex-column`}>
          <h2>Background</h2>
          <hr className="horizontal-line" />

          <div className={`${styles['row-gap']} flex-row`}>
            <div className={`${styles['first-column']} flex-column`}>
              <h3>{project.background.title}</h3>
              <h5>{project.background.subtitle}</h5>
              <p>{project.background.description}</p>

              <div className="flex-column" style={{ marginTop: '15px', gap: '8px' }}>
                {project.background.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            <div className={`${styles['last-column']} flex-column`}>
              <h4>Role</h4>
              <h5>{project.background.role}</h5>
              <h4>Timeline</h4>
              <h5>{project.background.timeline}</h5>
            </div>
          </div>
        </section>

        {/* Overview */}
        {project.overview && (
          <section className={styles['dialog-project__overview']}>
            <h2>{project.overview.title}</h2>
            <hr className="horizontal-line" />
            <p>{project.overview.content}</p>
          </section>
        )}

        {/* Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <section className={styles['dialog-project__responsibility']}>
            <h2>My Responsibilities</h2>
            <hr className="horizontal-line" />

            <div className={`${styles['row-gap']} flex-row`}>
              {project.responsibilities.map((col, colIndex) => (
                <div key={colIndex} className="flex-column" style={{ flex: 1 }}>
                  {col.title && <h3>{col.title}</h3>}
                  {col.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ marginBottom: '20px' }}>
                      <h5>{item.subtitle}</h5>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What's Next / Demo */}
        {project.demo && (
          <section className={styles['dialog-project__demo']}>
            <h2>{project.demo.title}</h2>
            <hr className="horizontal-line" />
            <p style={{ whiteSpace: 'pre-line' }}>{project.demo.content}</p>
          </section>
        )}

        {/* Technical Implementation / Research */}
        {project.research && project.research.items && (
          <section className={styles['dialog-project__research']}>
            <h2>{project.research.title}</h2>
            <hr className="horizontal-line" />

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
              {project.research.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ color: 'var(--color-accent)' }}>{item.label}:</strong>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Status */}
        {project.status && (
          <section className={styles['dialog-project__status']} style={{ marginBottom: '40px' }}>
            <h2>{project.status.title}</h2>
            <hr className="horizontal-line" />
            <p>{project.status.content}</p>
          </section>
        )}
      </main>
    </dialog>
  );
};

export default ProjectView;