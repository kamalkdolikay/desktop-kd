import { memo } from 'react';
import DesktopView from './desktop.view';
import { DESKTOP_ICONS } from '../constants/desktop.constants';
import { useAppSelector } from '@/store/redux.store';
import useDesktopIcons from '@/hooks/desktop/desktop-icon.hook';

/**
 * Main Desktop component that renders the desktop interface with draggable icons.
 */
const Desktop: React.FC = () => {
  const menuBarHeight = useAppSelector((state) => state.menubar.height);
  const {
    positions,
    draggingIconId,
    getIconRef,
    handleMouseDown,
    handleIconClick,
  } = useDesktopIcons({
    icons: DESKTOP_ICONS,
    menuBarHeight,
  });

  return (
    <DesktopView
      icons={DESKTOP_ICONS}
      positions={positions}
      draggingIconId={draggingIconId}
      onMouseDown={handleMouseDown}
      onIconClick={handleIconClick}
      menuBarHeight={menuBarHeight}
      getIconRef={getIconRef}
    />
  );
};

export default memo(Desktop);
