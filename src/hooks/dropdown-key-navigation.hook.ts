import { useCallback } from 'react';

const useDropdownKeyNavigation = (
  changeBackground: () => void,
  closeMenu: () => void,
): ((e: React.KeyboardEvent<HTMLLIElement>, action?: string) => void) => {
  return useCallback(
    (e: React.KeyboardEvent<HTMLLIElement>, action?: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (action === 'change-background') {
          changeBackground();
          closeMenu();
        }
      }
    },
    [changeBackground, closeMenu],
  );
};

export default useDropdownKeyNavigation;
