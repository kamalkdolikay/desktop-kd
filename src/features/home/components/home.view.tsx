import MenuBar from '@/ui/menu-bar/components/menu-bar.component';
import Desktop from '@/ui/desktop/components/desktop.component';
import PortfolioDialog from '@/ui/portfolio-dialog/component/portfolio-dialog.component';

const HomeView: React.FC = () => {
  return (
    <>
      <MenuBar />
      <Desktop />
      <PortfolioDialog />
    </>
  );
};

export default HomeView;
