import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/redux.store';
import { closeDialog } from '@/store/slice/dialog.slice';
import usePortfolioDialog from '@/hooks/portfolio-dialog/portfolio-dialog.hook';
import PortfolioDialogView from './portfolio-dialog.view';
import { PORTFOLIO_PROJECTS, PORTFOLIO_DIALOG_ID } from '../constants/portfolio-dialog.constant';
import type { PortfolioProject } from '../interface/portfolio-dialog.interface';

/**
 * PortfolioDialog component that manages the state and logic for the portfolio dialog.
 */
const PortfolioDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const menuBarHeight = useAppSelector((state) => state.menubar.height);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject>(PORTFOLIO_PROJECTS[0]);
  const { isOpen, dialogRef, position, handleMouseDown } = usePortfolioDialog({
    dialogId: PORTFOLIO_DIALOG_ID,
    menuBarHeight,
  });

  if (!isOpen || !position) return null;

  const handleFolderClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleViewProject = (project: PortfolioProject) => {
    console.log(`Open dialog: ${project.dialogId}`);
    // dispatch(openProjectDialog(project.dialogId));
  };

  return (
    <PortfolioDialogView
      dialogRef={dialogRef}
      position={position}
      handleMouseDown={handleMouseDown}
      closeDialog={() => dispatch(closeDialog())}
      projects={PORTFOLIO_PROJECTS}
      onFolderClick={handleFolderClick}
      onViewButtonClick={handleViewProject}
      selectedProject={selectedProject}
    />
  );
};

export default PortfolioDialog;
