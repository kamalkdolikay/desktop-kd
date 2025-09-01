import { useCallback, useLayoutEffect, useRef, useState, memo } from 'react';
import MenuBarView from './menu-bar.view';
import useClock from '@/hooks/menu-bar/clock.hook';
import useClickOutside from '@/hooks/menu-bar/click-outside.hook';
import useBackgroundImagePreload from '@/hooks/menu-bar/bg-image-preload.hook';
import { BACKGROUND_IMAGES } from '../constants/menu-bar.constants';
import { setHeight } from '../state/menu-bar.slice';
import { useAppDispatch } from '@/store/redux.store';

const MenuBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] =
    useState<number>(0);
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const menubarRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const currentTime = useClock();

  useClickOutside(menuRefs, () => setActiveMenu(null));
  useBackgroundImagePreload(BACKGROUND_IMAGES);

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

  useLayoutEffect(() => {
    if (menubarRef.current) {
      dispatch(setHeight(menubarRef.current.offsetHeight));
    }
  }, [dispatch]);

  return (
    <MenuBarView
      activeMenu={activeMenu}
      toggleMenu={toggleMenu}
      menuRefs={menuRefs}
      menubarRef={menubarRef}
      closeMenu={closeMenu}
      currentTime={currentTime}
      changeBackground={changeBackground}
    />
  );
};

export default memo(MenuBar);
