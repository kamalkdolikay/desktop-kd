import type { RecycleData } from '../interface/recycle-dialog.interface';

export const RECYCLE_DIALOG_ID = 'recycle-dialog';

// Temporary placeholders
const PLACEHOLDER_ICON =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';

export const RECYCLE_DATA: RecycleData = {
  title: 'RECYCLE BIN',
  items: [
    {
      id: 'item-life',
      label: 'My_Social_Life.exe',
      iconSrc: PLACEHOLDER_ICON,
      details: '0 KB (Corrupted)',
    },
    {
      id: 'item-money',
      label: 'Disposable_Income.kaching',
      iconSrc: PLACEHOLDER_ICON,
      details: 'Balance: -$4,500',
    },
    {
      id: 'item-relations',
      label: 'Healthy_Relationships.zip',
      iconSrc: PLACEHOLDER_ICON,
      details: 'Failed to extract. Archive empty.',
    },
    {
      id: 'item-hopes',
      label: 'Hopes_and_Dreams_2024.pdf',
      iconSrc: PLACEHOLDER_ICON,
      details: 'Deleted permanently.',
    },
  ],
};
