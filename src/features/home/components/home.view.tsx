import MenuBar from '@/ui/menu-bar/components/menu-bar.component';
import Desktop from '@/ui/desktop/components/desktop.component';
import PortfolioDialog from '@/ui/portfolio-dialog/component/portfolio-dialog.component';
import Project from '@/ui/project/component/project.component';
import AboutDialog from '@/ui/about-dialog/component/about-dialog.component';
import GameDialog from '@/ui/game-dialog/components/game-dialog.component';
import RecycleDialog from '@/ui/recycle-dialog/components/recycle-dialog.component';

const HomeView: React.FC = () => {
  return (
    <>
      <MenuBar />
      <Desktop />
      <PortfolioDialog />
      <Project />
      <AboutDialog />
      <GameDialog />
      <RecycleDialog />
    </>
  );
};

export default HomeView;
