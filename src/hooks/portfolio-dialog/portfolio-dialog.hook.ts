import { useState, useRef, useEffect, useCallback } from 'react';
import { useAppSelector } from '@/store/redux.store';
import type {
  PortfolioDialogPosition,
  PortfolioDialogDraggingState,
  UsePortfolioDialogProps,
} from '@/ui/portfolio-dialog/interface/portfolio-dialog.interface';

/**
 * Custom hook to manage the portfolio dialog's state, position, and drag functionality.
 * @param props - Configuration for the dialog, including dialogId and menuBarHeight.
 * @returns An object containing the dialog's open state, ref, position, and mouse down handler.
 */
const usePortfolioDialog = ({ dialogId, menuBarHeight }: UsePortfolioDialogProps) => {
  const openDialogId = useAppSelector((state) => state.dialog.openDialogId);
  const isOpen = openDialogId === dialogId;
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [draggingIcon, setDraggingIcon] = useState<PortfolioDialogDraggingState | null>(null);
  const [position, setPosition] = useState<PortfolioDialogPosition>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // Center the dialog when it opens
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const rect = dialogRef.current.getBoundingClientRect();
      setPosition({
        x: window.innerWidth / 2 - rect.width / 2,
        y: window.innerHeight / 2 - rect.height / 2,
      });
    }
  }, [isOpen]);

  // Mouse down on header
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!dialogRef.current) return;
    const rect = dialogRef.current.getBoundingClientRect();
    setDraggingIcon({
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    });
  }, []);

  // Mouse move (global)
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!draggingIcon || !dialogRef.current) return;

      const rect = dialogRef.current.getBoundingClientRect();
      const dialogWidth = rect.width;
      const dialogHeight = rect.height;

      const newX = Math.max(
        0,
        Math.min(e.clientX - draggingIcon.offsetX, window.innerWidth - dialogWidth),
      );
      const newY = Math.max(
        menuBarHeight,
        Math.min(e.clientY - draggingIcon.offsetY, window.innerHeight - dialogHeight),
      );

      setPosition({ x: newX, y: newY });
    },
    [draggingIcon, menuBarHeight],
  );

  const handleMouseUp = useCallback(() => {
    setDraggingIcon(null);
  }, []);

  // Bind/unbind listeners
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return {
    isOpen,
    dialogRef,
    position,
    handleMouseDown,
  };
};

export default usePortfolioDialog;
