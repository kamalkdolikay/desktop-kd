import barsNBruisesLogo from '@/assets/images/projects/bars-n-bruises-logo.png';
import skynetLogo from '@/assets/images/projects/skynet-logo.png';
import levelUpEduLogo from '@/assets/images/projects/level-up-edu.png';
import blocTheLineLogo from '@/assets/images/projects/bloc_the_line_banner.png';
import camelCodeLogo from '@/assets/images/projects/camel-code-logo.png';
import enviaLogo from '@/assets/images/projects/envia-logo.png';
import portfolioLogo from '@/assets/images/projects/desktop-kd-logo.png';
import wipLogo from '@/assets/images/projects/work-in-progress.png';
import type { ProjectData } from '../interface/project.interface';

export const PROJECTS_DATA = [
  // =========================================
  // 1. BARS-N-BRUISES
  // =========================================
  {
    id: 'bars-n-bruises-dialog',
    dialogTitle: 'BARS-N-BRUISES',
    banner: {
      src: barsNBruisesLogo,
      alt: 'Bars-n-Bruises game banner',
    },
    background: {
      title: 'Bars-n-Bruises',
      subtitle: "Retro 2D Beat 'Em Up • Godot 4.4 • Prototype",
      description:
        "A pixel-art, arcade-style 2D beat 'em up game developed in Godot 4.4. Set in neon-lit streets and a gritty prison environment, you play as a fearless fighter battling delinquents to uphold equality. Inspired by classic NES and arcade brawlers.",
      links: [
        { text: 'Play on Itch.io (Web & Windows)', url: 'https://pixelkd.itch.io/bars-n-bruises' },
        { text: 'View Source on GitHub', url: 'https://github.com/kamalkdolikay/bars-n-bruises' },
      ],
      role: 'Indie Game Developer (Solo)',
      timeline: '2024 - Ongoing',
    },
    overview: {
      title: 'Overview',
      content:
        'In a world ruled by fear, gangs of delinquents oppress those who dare to treat all genders as equals. You are the last line of resistance, fighting through neon alleys and prison yards. Bars n Bruises combines dynamic combat—chaining punches, kicks, and special attacks—with crunchy 8-bit visuals and a synth-heavy soundtrack to deliver intense side-scrolling chaos.',
    },
    responsibilities: [
      {
        title: 'Core Features',
        items: [
          {
            subtitle: 'Dynamic Combat System',
            description:
              'Implemented a combo-based combat system allowing players to chain attacks, manage hitboxes/hurtboxes, and execute special moves.',
          },
          {
            subtitle: 'Retro Aesthetics',
            description:
              'Designed the visual experience with crunchy 8-bit pixel art, vibrant neon environments, and a retro synth soundtrack to mimic classic arcade cabinets.',
          },
        ],
      },
      {
        title: 'Project Management',
        items: [
          {
            subtitle: 'Controls & Input',
            description:
              'Mapped intuitive inputs for Keyboard (WASD/Arrows) and arcade-style buttons (Space/Z/X/C) to ensure fluid character movement and combat response.',
          },
          {
            subtitle: 'Open Source Collaboration',
            description:
              'Established contribution guidelines (GitCommitStandards) and licensing (MIT) to encourage community involvement and open-source development.',
          },
        ],
      },
    ],
    demo: {
      title: "What's Next?",
      content:
        'The game is currently a playable **prototype** with core mechanics (movement, combo combat, basic levels) implemented in pure GDScript. Available to play in-browser (HTML5/Web) and as a downloadable Windows build on itch.io.\n\n' +
        'Future plans include refactoring performance-critical systems (e.g., combat hit detection, AI, particle effects) into **C++ via GDExtension** for better optimization, especially on lower-end hardware. Additional levels, enemy variety, sound polish, and potential mobile/web enhancements are also on the roadmap.',
    },
    research: {
      title: 'Technical Implementation',
      items: [
        { label: 'Engine', value: 'Godot 4.4' },
        { label: 'Primary Language', value: 'GDScript (full prototype implementation)' },
        {
          label: 'Planned Optimization',
          value: 'C++ via GDExtension (future performance modules)',
        },
        {
          label: 'Architecture',
          value:
            'Modular, component-based design following SOLID principles • Clean separation of concerns (player, combat, UI, world)',
        },
        {
          label: 'Platforms',
          value:
            'Web (HTML5/WASM) • Windows (downloadable build) • Runnable locally in Godot editor',
        },
        {
          label: 'Tools & Workflow',
          value:
            'Git (feature branches + PRs) • Structured commits • Full documentation (FolderStructure, GitWorkflow, CommitStandards)',
        },
        {
          label: 'Assets',
          value: 'Crunchy 8-bit pixel art (community + custom) • Retro synth audio',
        },
      ],
    },
    status: {
      title: 'Project Status',
      content:
        'Active development (prototype stage) • Last major update: mid-2025 • Playable demo available • Fully open-source (MIT) • Inviting contributions via GitHub!',
    },
  },
  // =========================================
  // 2. SKYNET (Work In Progress)
  // =========================================
  {
    id: 'skynet-dialog',
    dialogTitle: 'SKYNET',
    banner: { src: skynetLogo, alt: 'Skynet Project Banner' },
    background: {
      title: 'Skynet',
      subtitle: 'Work In Progress',
      description:
        'Detailed documentation for the Skynet project is currently being written. Please check back soon for updates on architecture and features.',
      links: [],
      role: 'Developer',
      timeline: 'TBD',
    },
    status: {
      title: 'Status',
      content: 'Documentation Coming Soon...',
    },
  },
  // =========================================
  // 3. LEVELUPEDU (BCIT Term Project - Gamified Learning)
  // =========================================
  {
    id: 'level-up-edu-dialog',
    dialogTitle: 'LEVEL UP EDU',
    banner: { src: levelUpEduLogo, alt: 'LevelUpEdu - Gamified 2D RPG Learning Platform Banner' },
    background: {
      title: 'LevelUpEdu',
      subtitle: 'Gamified Educational Platform • 2D RPG Learning • Next.js + Phaser • BCIT Term Project',
      description:
        'A web-based gamified learning platform where students explore a 2D RPG-style world, complete educational challenges/quests, earn points, and redeem rewards. Instructors define point-earning rules, while features include leaderboards, QR-linked profiles, and seamless point management.',
      links: [
				{ text: 'Live Demo (Vercel)', url: 'https://level-up-edu.vercel.app/' },
      	{ text: 'View Source on GitHub', url: 'https://github.com/kamalkdolikay/level-up-edu' },
			],
      role: 'Frontend (Game) Lead (5-member team)',
      timeline: 'Sep – Dec 2025 | BCIT Term Project',
    },
    responsibilities: [
			{
				title: 'Frontend & Game Leadership',
				items: [
					{
						subtitle: 'Team Coordination & Delivery',
						description:
							'Led a 5-member frontend/game stream, assigning tasks, coordinating code merges, and ensuring MVP delivery within strict academic timelines.',
					},
					{
						subtitle: 'UI/UX & Game Design',
						description:
							'Designed and implemented intuitive UI/UX aligned with the educational game theme, including Phaser-based 2D RPG scenes, sprite interactions, input handling, and Tiled map integration for interactable world elements.',
					},
				],
			},
			{
				title: 'Project Management & Quality',
				items: [
					{
						subtitle: 'Stakeholder & Documentation',
						description:
							'Coordinated with team members, instructors, and stakeholders; prepared meeting minutes, follow-ups, and ensured all project documentation met rubric requirements through formatting, reviews, and submission checks.',
					},
					{
						subtitle: 'Technical Implementation',
						description:
							'Oversaw integration of Phaser game engine within Next.js (scenes, interactions, sprite manifests), TypeScript types for game/API safety, and responsive game canvas rendering.',
					},
				],
			},
		],
		demo: {
			title: 'Current Status & Demo',
			content:
				'Completed BCIT term project (Dec 2025) with a fully deployed MVP. Features playable 2D RPG world, quest interactions, point system, leaderboards, and reward redemption. Live on Vercel — explore the game at /game route. Future potential includes mobile optimization, more quests, and expanded instructor tools.',
		},
		research: {
			title: 'Technical Implementation',
			items: [
				{ label: 'Frontend / Game', value: 'Next.js (App Router) • React • Phaser (2D RPG scenes) • TypeScript' },
				{ label: 'Backend / Data', value: 'Prisma ORM • PostgreSQL' },
				{ label: 'Architecture', value: 'Full-stack Next.js app • Modular Phaser scenes & interactions • Tiled map integration • Type-safe game & API types' },
				{ label: 'Tools & Workflow', value: 'pnpm • ESLint/Prettier • Husky • Jest • Tiled (map editor) • Vercel deployment' },
				{ label: 'Platforms', value: 'Web (browser-based, responsive) • Local dev with game canvas' },
				{ label: 'Key Game Features', value: '2D world navigation • Interactable objects • Input handling • Sprite management • Quest/challenge system' },
			],
		},
		status: {
			title: 'Project Status',
			content:
				'Completed (BCIT Term Project – Dec 2025) • Live MVP on Vercel • Open-source • 344+ commits • Team of 5 (Frontend/Game stream led by me)',
		},
  },

  // =========================================
  // 4. BLOC THE LINE (BCIT Term Project)
  // =========================================
  {
    id: 'bloc-the-line-dialog',
    dialogTitle: 'BLOC THE LINE',
    banner: {
      src: blocTheLineLogo,
      alt: 'Bloc The Line Project Banner',
    },
    background: {
      title: 'Bloc The Line',
      subtitle: 'Real-Time Multiplayer Blokus • Elixir + Phoenix LiveView • BCIT Term Project',
      description:
        'A modern, real-time multiplayer adaptation of the classic board game Blokus. Players compete to place polyomino pieces on a shared board following strict official rules, with seamless real-time synchronization across 2–4 players — all powered by 100% server-rendered Phoenix LiveView.',
      links: [
        { text: 'Play Live Demo', url: 'https://bloc-the-line-dev.onrender.com/' },
        { text: 'View Source on GitHub', url: 'https://github.com/kamalkdolikay/bloc_the_line' },
      ],
      role: 'Project Manager & Technical Lead (Team of 18)',
      timeline: 'Nov – Dec 2025',
    },
    overview: {
      title: 'Overview',
      content:
        'Led an 18-member developer team to build a real-time multiplayer Blokus game from scratch. The project features a GenServer-powered game engine, PubSub for live synchronization, drag-and-drop mechanics, and full enforcement of official Blokus rules (corner-touch placement, no edge adjacency, etc.). Designed as a monolithic client-server architecture with Phoenix LiveView for responsive, zero-client-JS gameplay. Includes a custom code generator to enforce consistent project structure across the large team.',
    },
    responsibilities: [
      {
        title: 'Leadership & Project Management',
        items: [
          {
            subtitle: 'Team Coordination',
            description:
              'Led and coordinated an 18-member cross-functional team, managing scope, milestones, task assignments, delivery timelines, and regular status updates.',
          },
          {
            subtitle: 'Code Quality & Collaboration',
            description:
              'Established strict contribution standards (README, CONTRIBUTING.md), file naming conventions, and custom mix generator to reduce merge conflicts and ensure consistent development across all team members.',
          },
          {
            subtitle: 'Reviews & Stability',
            description:
              'Conducted code reviews, tracked issues/risks, facilitated meetings, resolved blockers, and enforced regular integration testing for stability.',
          },
        ],
      },
      {
        title: 'Technical Architecture & Implementation',
        items: [
          {
            subtitle: 'System Design',
            description:
              'Designed a monolithic client-server architecture using Elixir/Phoenix with LiveView for real-time updates, GenServer for game state, and PubSub for multiplayer synchronization.',
          },
          {
            subtitle: 'Core Game Engine',
            description:
              'Implemented rules enforcement, piece management (shapes, rotations), move validation, and game flow in modular Elixir modules.',
          },
          {
            subtitle: 'Developer Tools',
            description:
              'Built a custom code generator (mix phx.gen.live.module) to enforce clean, feature-scoped architecture and reduce Phoenix generator clutter.',
          },
        ],
      },
    ],
    demo: {
      title: 'Current Status',
      content:
        'Completed course project (Dec 2025) with a playable prototype. Features a matchmaking lobby, real-time multiplayer (2–4 players), and full game mechanics. Deployed demo available on Render. Future enhancements could include polished lobby, spectator mode, and AI opponents.',
    },
    research: {
      title: 'Technical Implementation',
      items: [
        { label: 'Backend', value: 'Elixir • Phoenix Framework • GenServer • PubSub' },
        { label: 'Frontend', value: 'Phoenix LiveView + HEEx' },
        {
          label: 'Architecture',
          value:
            'Monolithic client-server • Modular components • Strict conventions + custom generator',
        },
        { label: 'Deployment', value: 'Docker • Render (dev) • Fly.io compatible' },
        {
          label: 'Tools & Workflow',
          value:
            'Git (dev branch workflow + PRs) • Mix tasks • Comprehensive docs & standards • Docker Compose',
        },
        { label: 'Platforms', value: 'Web (browser-based multiplayer)' },
      ],
    },
    status: {
      title: 'Project Status',
      content:
        'Completed & Released (v1.0 – Dec 2025) • Playable demo live • Open-source (MIT) • 17+ contributors • BCIT Term 4 showcase project • Last major update: Dec 2025',
    },
  },

  // =========================================
  // 5. CAMEL CODE (Work In Progress)
  // =========================================
  {
    id: 'camel-code-dialog',
    dialogTitle: 'CAMEL CODE',
    banner: { src: camelCodeLogo, alt: 'Camel Code Project Banner' },
    background: {
      title: 'Camel Code',
      subtitle: 'Work In Progress',
      description:
        'Detailed documentation for Camel Code is currently being written. Please check back soon.',
      links: [],
      role: 'Developer',
      timeline: 'TBD',
    },
    status: {
      title: 'Status',
      content: 'Documentation Coming Soon...',
    },
  },

  // =========================================
  // 6. ENVIA (Work In Progress)
  // =========================================
  {
    id: 'envia-dialog',
    dialogTitle: 'ENVIA',
    banner: { src: enviaLogo, alt: 'Envia Project Banner' },
    background: {
      title: 'Envia',
      subtitle: 'Work In Progress',
      description:
        'Detailed documentation for Envia is currently being written. Please check back soon.',
      links: [],
      role: 'Developer',
      timeline: 'TBD',
    },
    status: {
      title: 'Status',
      content: 'Documentation Coming Soon...',
    },
  },

  // =========================================
  // 7. PORTFOLIO (Meta Project)
  // =========================================
  {
    id: 'portfolio-sub-dialog',
    dialogTitle: 'PORTFOLIO',
    banner: { src: portfolioLogo, alt: 'Portfolio Project Banner' },
    background: {
      title: 'My Portfolio',
      subtitle: 'React • TypeScript • Redux',
      description:
        'This very website! A desktop-inspired portfolio environment built to showcase my projects interactively.',
      links: [],
      role: 'Frontend Developer',
      timeline: '2024 - Present',
    },
    status: {
      title: 'Status',
      content: 'Live and interactive!',
    },
  },

  // =========================================
  // 8. RANDOM (Work In Progress)
  // =========================================
  {
    id: 'random-dialog',
    dialogTitle: 'RANDOM',
    banner: { src: wipLogo, alt: 'Random Project Banner' },
    background: {
      title: 'Random / Experiments',
      subtitle: 'Various Prototypes',
      description: 'A collection of smaller experiments and prototypes. Details coming soon.',
      links: [],
      role: 'Developer',
      timeline: 'Ongoing',
    },
    status: {
      title: 'Status',
      content: 'Documentation Coming Soon...',
    },
  },
];
