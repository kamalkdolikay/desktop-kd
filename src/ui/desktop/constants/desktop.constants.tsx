import portfolioIcon from '@/assets/project.png';
import joystickIcon from '@/assets/joystick.png';
import recycleBinIcon from '@/assets/hazardous.png';
import informationIcon from '@/assets/information.png';

/**
 * Dialog IDs for desktop icons.
 */
export const DialogId = {
  PORTFOLIO: 'portfolio-dialog',
  GAME: 'game-dialog',
  RECYCLE: 'recycle-dialog',
  ABOUT: 'about-dialog',
} as const;

// Derive a type from its values
export type DialogId = (typeof DialogId)[keyof typeof DialogId];

/**
 * Configuration for desktop icons.
 */
export const DESKTOP_ICONS = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    iconSrc: portfolioIcon,
    dialogId: DialogId.PORTFOLIO,
    altText: 'Portfolio Icon',
  },
  {
    id: 'game',
    label: 'Game.exe',
    iconSrc: joystickIcon,
    dialogId: DialogId.GAME,
    altText: 'Settings Icon',
  },
  {
    id: 'recycle',
    label: 'Recycle Bin',
    iconSrc: recycleBinIcon,
    dialogId: DialogId.RECYCLE,
    altText: 'Recycle Icon',
  },
  {
    id: 'about',
    label: 'About',
    iconSrc: informationIcon,
    dialogId: DialogId.ABOUT,
    altText: 'About Icon',
  },
];

/**
 * Constants for icon positioning and dimensions.
 */
export const ICON_HEIGHT = 120;
export const START_X = 80;
export const START_Y = 100;
export const DEFAULT_ICON_WIDTH = 80;
export const DEFAULT_ICON_HEIGHT = 80;
