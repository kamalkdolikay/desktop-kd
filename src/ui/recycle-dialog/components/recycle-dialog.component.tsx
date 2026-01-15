import { useAppDispatch, useAppSelector } from '@/store/redux.store';
import { closeDialog } from '@/store/slice/dialog.slice';
import usePortfolioDialog from '@/hooks/portfolio-dialog/portfolio-dialog.hook';
import RecycleDialogView from './recycle-dialog.view';
import { RECYCLE_DIALOG_ID, RECYCLE_DATA } from '../constants/recycle-dialog.constant';

const RecycleDialog = () => {
  const dispatch = useAppDispatch();
  const menuBarHeight = useAppSelector((state) => state.menubar.height);

  // Use the standard hook for dragging functionality
  const { isOpen, dialogRef, position, handleMouseDown } = usePortfolioDialog({
    dialogId: RECYCLE_DIALOG_ID,
    menuBarHeight,
  });

  if (!isOpen || !position) return null;

  return (
    <RecycleDialogView
      onClose={() => dispatch(closeDialog())}
      dialogRef={dialogRef}
      position={position}
      handleMouseDown={handleMouseDown}
      data={RECYCLE_DATA}
    />
  );
};

export default RecycleDialog;
