import barsNBruisesLogo from '@/assets/images/projects/bars-n-bruises-logo.png';

export const PROJECTS_DATA = [
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
        { label: 'Planned Optimization', value: 'C++ via GDExtension (future performance modules)' },
        { label: 'Architecture', value: 'Modular, component-based design following SOLID principles • Clean separation of concerns (player, combat, UI, world)' },
        { label: 'Platforms', value: 'Web (HTML5/WASM) • Windows (downloadable build) • Runnable locally in Godot editor' },
        { label: 'Tools & Workflow', value: 'Git (feature branches + PRs) • Structured commits • Full documentation (FolderStructure, GitWorkflow, CommitStandards)' },
        { label: 'Assets', value: 'Crunchy 8-bit pixel art (community + custom) • Retro synth audio' }
      ]
    },
    status: {
      title: 'Project Status',
      content: 
        'Active development (prototype stage) • Last major update: mid-2025 • Playable demo available • Fully open-source (MIT) • Inviting contributions via GitHub!'
    }
  },
];
