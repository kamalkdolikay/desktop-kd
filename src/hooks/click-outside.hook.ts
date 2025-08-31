import { useEffect, useCallback } from 'react';

// Close menus when clicking outside
const useClickOutside = (
  refs: React.MutableRefObject<Record<string, HTMLDivElement | null>>,
  callback: () => void,
): void => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as Node;
      if (!Object.values(refs.current).some((ref) => ref?.contains(target))) {
        callback();
      }
    },
    [refs, callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);
};

export default useClickOutside;
