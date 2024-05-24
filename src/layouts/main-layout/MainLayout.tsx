import { ReactNode } from "react";
import { Header, Footer } from "../../components/index";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-shrink-0 bg-gray-800 text-white">
        <Header />
      </div>

      <div className="flex-grow max-w-[1444px] mx-auto px-5 w-full ">
        <div>{children}</div>
      </div>

      <div className="flex-shrink-0 bg-gray-800 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
