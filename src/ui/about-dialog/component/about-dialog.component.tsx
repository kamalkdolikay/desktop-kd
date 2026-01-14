import { useAppDispatch, useAppSelector } from '@/store/redux.store';
import { closeDialog } from '@/store/slice/dialog.slice';
import usePortfolioDialog from '@/hooks/portfolio-dialog/portfolio-dialog.hook';
import AboutDialogView from './about-dialog.view';

const ABOUT_DIALOG_ID = 'about-dialog';

const AboutDialog = () => {
  const dispatch = useAppDispatch();
  const menuBarHeight = useAppSelector((state) => state.menubar.height);
  
  // Reuse the existing hook to handle dragging and positioning
  const { isOpen, dialogRef, position, handleMouseDown } = usePortfolioDialog({
    dialogId: ABOUT_DIALOG_ID,
    menuBarHeight,
  });

  // If the dialog isn't open or position isn't calculated yet, don't render
  if (!isOpen || !position) return null;

  return (
    <AboutDialogView 
      onClose={() => dispatch(closeDialog())} 
      dialogRef={dialogRef}
      position={position}
      handleMouseDown={handleMouseDown}
    />
  );
};

export default AboutDialog;