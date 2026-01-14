import { memo } from 'react';
import styles from '../styles/about-dialog.module.css';

interface AboutDialogViewProps {
  onClose: () => void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  position: { x: number; y: number };
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AboutDialogView: React.FC<AboutDialogViewProps> = ({
  onClose,
  dialogRef,
  position,
  handleMouseDown,
}) => {
  return (
    <dialog
      open
      ref={dialogRef}
      id="about-dialog"
      className={`dialog ${styles['dialog-about']} flex-column`}
      aria-labelledby="about-dialog-title"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        margin: 0,
      }}
    >
      <header
        className="dialog__header flex-row"
        onMouseDown={handleMouseDown}
        style={{ cursor: 'move' }}
      >
        <h4 className="dialog__title" id="about-dialog-title">
          ABOUT
        </h4>
        <div
          className="dialog__close-btn"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close dialog"
        >
          X
        </div>
      </header>

      <main className={`${styles['dialog-about__content']} flex-column`}>
        {/* Banner Section */}
        <section className={`${styles['dialog-about__banner']} flex-row`}>
          <div>
            <span style={{ fontSize: '80pt' }}>l</span>
            <span style={{ fontSize: '50pt' }}>a</span>
            <span style={{ fontSize: '50pt' }}>m</span>
            <span style={{ fontSize: '20pt' }}>a</span>
            <span style={{ fontSize: '90pt' }}>K</span>
          </div>
          <div>
            <span style={{ fontSize: '90pt' }}>D</span>
            <span style={{ fontSize: '20pt' }}>o</span>
            <span style={{ fontSize: '20pt' }}>l</span>
            <span style={{ fontSize: '20pt' }}>i</span>
            <span style={{ fontSize: '20pt' }}>k</span>
            <span style={{ fontSize: '20pt' }}>a</span>
            <span style={{ fontSize: '20pt' }}>y</span>
          </div>
        </section>

        {/* Origin Story */}
        <section className={`${styles['dialog-about__background']} flex-column`}>
          <h2>Origin Story</h2>
          <hr className="horizontal-line" />
          <article className="flex-row">
            <div>
              <h3>From &lt;div&gt; to Dungeons</h3>
              <p>
                Hi, I'm Kamal (or <strong>pixelKD</strong> if we're in 8-bit mode)! I’m a Creative
                Developer based in Metro Vancouver, BC (where the rain fuels my coding marathons).
              </p>
              <p style={{ marginTop: '10px' }}>
                My journey started in the Dark Ages of standard Web Development (PHP, jQuery, the
                usual suspects). I eventually evolved into a Full Stack Developer (MEAN/MERN), but
                the next step in evolution was unlocking the raw power of the machine—diving into
                Game Development, GPU Programming, and Systems Programming.
              </p>
            </div>
          </article>
        </section>

        {/* The Creative Arc */}
        <section className={styles['dialog-about__overview']}>
          <h2>The Creative Arc</h2>
          <hr className="horizontal-line" />
          <article className="flex-row">
            <div>
              <h3>Code, Pixels & Playable Worlds</h3>
              <p>
                I build weird, beautiful, nostalgic stuff. I’m obsessed with anything that lets
                creativity explode. If it involves <strong>code + art</strong> — I'm in.
              </p>
              <p style={{ marginTop: '10px' }}>
                Since I was young, I’ve had a "glitch" in my brain that forces me to find beauty in
                everything—whether it's nature, fashion, or document formatting. I get a visceral
                urge to fix bad color palettes and font sizes until they satisfy my need for
                perfection. This obsessive <strong>Attention to Detail</strong> ensures my designs
                are not just unique, but polished to the highest form.
              </p>
              <p style={{ marginTop: '10px' }}>
                Growing up on a diet of Arcade and Nintendo classics, I thrive on building
                experiences that feel
                <strong> nostalgic with a modern touch</strong>. I strive to be a better version of
                myself every day, creating eye-catching worlds that prioritize{' '}
                <strong>User Accessibility</strong> and distinct style.
              </p>
            </div>
          </article>
        </section>

        {/* Daily Quest Log */}
        <section className={styles['dialog-about__responsibility']}>
          <h2>Daily Quest Log</h2>
          <hr className="horizontal-line" />

          <article className="flex-row">
            <div className="flex-column" style={{ flex: 1 }}>
              <h3>Tech Adventures</h3>
              <p>
                <strong>Hackathons:</strong> <br />I build things fast and break them faster. It's
                called "agile development."
              </p>
              <p>
                <strong>The Design Hunt:</strong> <br />I will happily browse the web for days just
                to find that <em>one</em> right design concept, then obsessively tweak it until it
                feels perfect.
              </p>
              <p>
                <strong>Skills:</strong> <br />
                Leading without crying (mostly), writing commit messages that belong in a museum,
                and convincing people that Ocaml is a valid life choice.
              </p>
            </div>
            <div className="flex-column" style={{ flex: 1 }}>
              <h3>The "Human" Side</h3>
              <p>
                <strong>Anime:</strong> <br />
                My absolute go-to. Whether for art inspiration or just chilling, it's my main source
                of energy.
              </p>
              <p>
                <strong>Hiking:</strong> <br />I touch grass occasionally to remember what
                high-resolution textures look like IRL.
              </p>
              <p>
                <strong>Cooking:</strong> <br />
                Debugging recipes until they compile into something edible (70% chaos, 30%
                delicious).
              </p>
            </div>
          </article>
        </section>

        {/* Current Status */}
        <section className={styles['dialog-about__overview']}>
          <h2>Current Status</h2>
          <hr className="horizontal-line" />
          <article className="flex-row">
            <div>
              <p>
                <strong>Education:</strong> Survived the <em>Computer Systems Technology (CST)</em>{' '}
                program at BCIT (Graduated Dec 2025). I now have official proof that I can exit Vim
                without rebooting and still smile
              </p>
              <p>
                <strong>Status:</strong> Caffeinated and compiling. <br />
                <strong>Focus:</strong> Mastering the dark arts of low-level programming, React.js,
                and C#.
              </p>
            </div>
          </article>
        </section>

        {/* Technical Stats */}
        <section className={styles['dialog-about__research']}>
          <h2>Technical Stats</h2>
          <hr className="horizontal-line" />
          <article className="flex-row">
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <strong>Languages:</strong> Java, C/C++, Python, Go, Rust, Javascript/TypeScript,
                  Elixir, Ocaml, Sarcasm.
                </li>
                <li>
                  <strong>Web & Backend:</strong> React, Angular, Node.js, Next.js, Phoenix,
                  Flutter.
                </li>
                <li>
                  <strong>Game Engines:</strong> Godot, Phaser.
                </li>
                <li>
                  <strong>Tools & DB:</strong> Docker, AWS (EC2), PostgreSQL, MongoDB, Git, CI/CD.
                </li>
              </ul>
            </div>
          </article>
        </section>

        {/* Social Links Section */}
        <section className={styles['dialog-about__demo']}>
          {/* <h2>Social Uplink</h2> */}
          <hr className="horizontal-line" />
          <div className="flex-row" style={{ gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/kamalkdolikay"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              GitHub
            </a>
            <a
              href="https://pixelkd.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Itch.io
            </a>
            <a
              href="https://www.linkedin.com/in/kamaldolikay"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              LinkedIn
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Resume.pdf
            </a>
          </div>
        </section>
      </main>
    </dialog>
  );
};

export default memo(AboutDialogView);
