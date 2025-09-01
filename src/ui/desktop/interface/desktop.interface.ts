import type { DialogId } from '../constants/desktop.constants';

/**
 * Configuration for desktop icons, including their IDs, labels, and associated dialogs.
 */
export type DesktopIcon = {
  id: string;
  label: string;
  iconSrc: string;
  dialogId: DialogId;
  altText: string;
};

export interface DesktopIconPosition {
  id: DesktopIcon['id'];
  left: number;
  top: number;
}

export interface DesktopViewProps {
  icons: DesktopIcon[];
  positions: DesktopIconPosition[];
  draggingIconId: DesktopIcon['id'] | null;
  onMouseDown: (
    e: React.MouseEvent<HTMLDivElement>,
    iconId: DesktopIcon['id'],
  ) => void;
  onIconClick: (iconId: DesktopIcon['id']) => void;
  menuBarHeight: number;
  getIconRef: (
    iconId: DesktopIcon['id'],
  ) => (el: HTMLDivElement | null) => void;
}
