import { useCallback, useRef, useState, memo } from 'react';
import MenuBarView from './menu-bar.view';
import useClock from '@/hooks/clock.hook';
import useClickOutside from '@/hooks/click-outside.hook';
import useBackgroundImagePreload from '@/hooks/bg-image-preload.hook';
import { BACKGROUND_IMAGES } from '../constants/menu-bar.constants';

const MenuBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] =
    useState<number>(0);
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const currentTime = useClock();

  useClickOutside(menuRefs, () => setActiveMenu(null));
  useBackgroundImagePreload(BACKGROUND_IMAGES);

  /*const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as Node;
    if (!Object.values(menuRefs.current).some((ref) => ref?.contains(target))) {
      setActiveMenu(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);*/

  const toggleMenu = useCallback((menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const closeMenu = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const changeBackground = () => {
    const newIndex = (currentBackgroundIndex + 1) % BACKGROUND_IMAGES.length;
    setCurrentBackgroundIndex(newIndex);
    document.body.style.background = `url(${BACKGROUND_IMAGES[newIndex]}) center / cover no-repeat fixed`;
  };

  return (
    <MenuBarView
      activeMenu={activeMenu}
      toggleMenu={toggleMenu}
      menuRefs={menuRefs}
      closeMenu={closeMenu}
      currentTime={currentTime}
      changeBackground={changeBackground}
    />
  );
};

export default memo(MenuBar);
