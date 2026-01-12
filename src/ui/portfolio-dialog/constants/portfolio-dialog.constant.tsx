import folder4Icon from '@/assets/images/folder_icons/folder_4.png';
import folder5Icon from '@/assets/images/folder_icons/folder_5.png';
import folder6Icon from '@/assets/images/folder_icons/folder_6.png';
import folder7Icon from '@/assets/images/folder_icons/folder_7.png';
import folder8Icon from '@/assets/images/folder_icons/folder_8.png';
import folder9Icon from '@/assets/images/folder_icons/folder_9.png';
import malwareIcon from '@/assets/images/folder_icons/malware.png';
import gameFolderIcon from '@/assets/images/folder_icons/game-folder.png';
import portfolioImage from '@/assets/images/projects/desktop-kd-logo.png'
import skynetImage from '@/assets/images/projects/skynet-logo.png'
import levelUpEduImage from '@/assets/images/projects/level-up-edu.png'
import blocTheLineImage from '@/assets/images/projects/bloc_the_line_banner.png'
import camelCodeImage from '@/assets/images/projects/camel-code-logo.png'
import enviaImage from '@/assets/images/projects/envia-logo.png'
import barsNBruisesImage from '@/assets/images/projects/bars-n-bruises-logo.png'
import workInProgressImage from '@/assets/images/projects/work-in-progress.png'
import type { PortfolioProject } from '../interface/portfolio-dialog.interface';

/**
 * Dialog IDs for portfolio projects.
 */
export const DialogId = {
  SKYNET: 'skynet-dialog',
  LEVEL_UP_EDU: 'level-up-edu-dialog',
  BLOC_THE_LINE: 'bloc-the-line-dialog',
  BARS_N_BRUISES: 'bars-n-bruises-dialog',
  CAMEL_CODE: 'camel-code-dialog',
  PORTFOLIO: 'portfolio-sub-dialog',
  ENVIA: 'envia-dialog',
  RANDOM: 'random-dialog',
} as const;

// Derive a type from its values
export type DialogId = (typeof DialogId)[keyof typeof DialogId];

export const PORTFOLIO_DIALOG_ID = 'portfolio-dialog';

/**
 * Configuration for portfolio projects.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'skynet',
    title: 'Skynet',
    imgSrc: skynetImage,
    folderIconSrc: folder4Icon,
    dialogId: DialogId.SKYNET,
    altText: 'Skynet project preview',
  },
  {
    id: 'level-up-edu',
    title: 'Level Up Edu',
    imgSrc: levelUpEduImage,
    folderIconSrc: folder5Icon,
    dialogId: DialogId.LEVEL_UP_EDU,
    altText: 'Level Up Edu project preview',
  },
  {
    id: 'bloc-the-line',
    title: 'Bloc the Line',
    imgSrc: blocTheLineImage,
    folderIconSrc: folder6Icon,
    dialogId: DialogId.BLOC_THE_LINE,
    altText: 'Bloc the Line project preview',
  },
  {
    id: 'bars-n-bruises',
    title: 'Bars-n-Bruises',
    imgSrc: barsNBruisesImage,
    folderIconSrc: folder7Icon,
    dialogId: DialogId.BARS_N_BRUISES,
    altText: 'Bars-n-Bruises project preview',
  },
  {
    id: 'camel-code',
    title: 'Camel Code',
    imgSrc: camelCodeImage,
    folderIconSrc: folder8Icon,
    dialogId: DialogId.CAMEL_CODE,
    altText: 'Camel Code project preview',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    imgSrc: portfolioImage,
    folderIconSrc: folder9Icon,
    dialogId: DialogId.PORTFOLIO,
    altText: 'Portfolio project preview',
  },
  {
    id: 'envia',
    title: 'Envia',
    imgSrc: enviaImage,
    folderIconSrc: malwareIcon,
    dialogId: DialogId.ENVIA,
    altText: 'Envia project preview',
  },
  {
    id: 'random',
    title: 'Random',
    imgSrc: workInProgressImage,
    folderIconSrc: gameFolderIcon,
    dialogId: DialogId.RANDOM,
    altText: 'Random project preview',
  },
];
