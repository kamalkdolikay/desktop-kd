import { useState, useRef, useEffect, useCallback } from 'react';
import type {
  DesktopIcon,
  DesktopIconPosition,
} from '@/ui/desktop/interface/desktop.interface';
import {
  ICON_HEIGHT,
  START_X,
  START_Y,
  DEFAULT_ICON_WIDTH,
  DEFAULT_ICON_HEIGHT,
} from '@/ui/desktop/constants/desktop.constants';
import type {
  UseDesktopIconsProps,
  DraggingIconsProps,
} from './desktop-icon.interface';

const useDesktopIcons = ({ icons, menuBarHeight }: UseDesktopIconsProps) => {
  const [positions, setPositions] = useState<DesktopIconPosition[]>([]);
  const [draggingIcon, setDraggingIcon] = useState<DraggingIconsProps | null>(
    null,
  );
  const iconRefs = useRef<Record<DesktopIcon['id'], HTMLDivElement | null>>({});

  // Initialize icon positions
  useEffect(() => {
    const initialPositions: DesktopIconPosition[] = icons.map(
      (icon, index) => ({
        id: icon.id,
        left: START_X,
        top: START_Y + index * ICON_HEIGHT,
      }),
    );
    setPositions(initialPositions);
  }, [icons]);

  // Handle mouse down to start dragging
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, iconId: DesktopIcon['id']) => {
      e.preventDefault();
      const target = e.currentTarget;
      setDraggingIcon({
        id: iconId,
        offsetX: e.clientX - (target.offsetLeft || 0),
        offsetY: e.clientY - (target.offsetTop || 0),
      });
    },
    [],
  );

  // Handle mouse move to update position
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!draggingIcon) return;

      const iconElement = iconRefs.current[draggingIcon.id];
      const iconWidth =
        iconElement?.getBoundingClientRect().width ?? DEFAULT_ICON_WIDTH;
      const iconHeight =
        iconElement?.getBoundingClientRect().height ?? DEFAULT_ICON_HEIGHT;
      const newLeft = Math.max(
        0,
        Math.min(
          e.clientX - draggingIcon.offsetX,
          window.innerWidth - iconWidth,
        ),
      );
      const newTop = Math.max(
        menuBarHeight,
        Math.min(
          e.clientY - draggingIcon.offsetY,
          window.innerHeight - iconHeight,
        ),
      );

      setPositions((prev) =>
        prev.map((pos) =>
          pos.id === draggingIcon.id
            ? { ...pos, left: newLeft, top: newTop }
            : pos,
        ),
      );
    },
    [draggingIcon, menuBarHeight],
  );

  // Handle mouse/touch up to stop dragging
  const handleMouseUp = useCallback(() => {
    setDraggingIcon(null);
  }, []);

  // Bind mouse and touch events
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Set icon refs
  const getIconRef = useCallback(
    (iconId: DesktopIcon['id']) => (el: HTMLDivElement | null) => {
      iconRefs.current[iconId] = el;
    },
    [],
  );

  // Handle icon click
  const handleIconClick = useCallback(
    (iconId: DesktopIcon['id']) => {
      const icon = icons.find((i) => i.id === iconId);
      if (icon) {
        console.log(`Open dialog: ${icon.dialogId}`);
      }
    },
    [icons],
  );

  return {
    positions,
    draggingIconId: draggingIcon?.id ?? null,
    getIconRef,
    handleMouseDown,
    handleIconClick,
  };
};

export default useDesktopIcons;
