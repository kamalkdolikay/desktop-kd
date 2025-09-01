import { useEffect } from 'react';

// Preload background images
const useBackgroundImagePreload = (images: readonly string[]): void => {
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);
};

export default useBackgroundImagePreload;
