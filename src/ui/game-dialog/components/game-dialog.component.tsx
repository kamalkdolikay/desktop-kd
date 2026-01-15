import { useAppDispatch, useAppSelector } from '@/store/redux.store';
import { closeDialog } from '@/store/slice/dialog.slice';
import usePortfolioDialog from '@/hooks/portfolio-dialog/portfolio-dialog.hook';
import GameDialogView from './game-dialog.view';
import { GAME_DIALOG_ID, GAME_DATA } from '../constants/game-dialog.constant';

const GameDialog = () => {
  const dispatch = useAppDispatch();
  const menuBarHeight = useAppSelector((state) => state.menubar.height);
  
  // Reusing your existing drag hook
  const { isOpen, dialogRef, position, handleMouseDown } = usePortfolioDialog({
    dialogId: GAME_DIALOG_ID,
    menuBarHeight,
  });

  // Conditionally render: This ensures the game stops running when closed
  if (!isOpen || !position) return null;

  return (
    <GameDialogView 
      onClose={() => dispatch(closeDialog())} 
      dialogRef={dialogRef}
      position={position}
      handleMouseDown={handleMouseDown}
      data={GAME_DATA}
    />
  );
};

export default GameDialog;