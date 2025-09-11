import type { RefObject } from 'react';
import type { DialogId } from '../constants/portfolio-dialog.constant';

/**
 * Configuration for portfolio projects.
 */
export interface PortfolioProject {
  id: string;
  title: string;
  imgSrc: string;
  folderIconSrc: string;
  dialogId: DialogId;
  altText: string;
}

/**
 * Position of the portfolio dialog.
 */
export interface PortfolioDialogPosition {
  x: number;
  y: number;
}

/**
 * State for dragging the portfolio dialog.
 */
export interface PortfolioDialogDraggingState {
  offsetX: number;
  offsetY: number;
}

/**
 * Props for the PortfolioDialogView component.
 */
export interface PortfolioDialogViewProps {
  dialogRef: RefObject<HTMLDialogElement | null>;
  position: PortfolioDialogPosition;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  closeDialog: () => void;
  projects: PortfolioProject[];
  onFolderClick: (project: PortfolioProject) => void;
  selectedProject: PortfolioProject;
  onViewButtonClick: (project: PortfolioProject) => void;
}

/**
 * Props for the usePortfolioDialog hook.
 */
export interface UsePortfolioDialogProps {
  dialogId: string;
  menuBarHeight: number;
}
