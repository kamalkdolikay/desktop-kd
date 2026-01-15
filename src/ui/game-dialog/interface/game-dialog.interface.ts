import type { RefObject, MouseEvent } from 'react';

export interface GameDialogData {
  title: string;
  gameUrl: string; // Path to your index.html in the public folder
}

export interface GameDialogViewProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement | null>;
  position: { x: number; y: number };
  handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  data: GameDialogData;
}