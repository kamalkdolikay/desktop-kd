export interface MenuBarViewProps {
  activeMenu: string | null;
  toggleMenu: (menu: string) => void;
  menuRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  closeMenu: () => void;
  currentTime: Date;
  changeBackground: () => void;
}

export interface MenuItem {
  name: string;
  items: string[];
}
