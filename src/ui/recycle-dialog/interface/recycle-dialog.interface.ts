import type { RefObject, MouseEvent } from 'react';

export interface DeletedItem {
  id: string;
  label: string;
  iconSrc: string;
  details: string;
}

export interface RecycleData {
  title: string;
  items: DeletedItem[];
}

export interface RecycleDialogViewProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement | null>;
  position: { x: number; y: number };
  handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  data: RecycleData;
}