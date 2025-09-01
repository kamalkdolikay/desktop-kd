import { DialogId } from "@/ui/desktop/constants/desktop.constants";

/**
 * Configuration for desktop icons, including their IDs, labels, and associated dialogs.
 */
export interface DesktopIcon {
  id: string;
  label: string;
  iconSrc: string;
  dialogId: DialogId;
  altText: string;
}

export interface UseDesktopIconsProps {
  icons: DesktopIcon[];
  menuBarHeight: number;
}

export interface DraggingIconsProps {
  id: DesktopIcon['id'];
  offsetX: number;
  offsetY: number;
}
