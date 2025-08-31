import { useCallback } from 'react';

const useMenuKeyNavigation = (
  toggleMenu: (menu: string) => void,
): ((e: React.KeyboardEvent<HTMLDivElement>, menu: string) => void) => {
  return useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>, menu: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu(menu);
      }
    },
    [toggleMenu],
  );
};

export default useMenuKeyNavigation;
