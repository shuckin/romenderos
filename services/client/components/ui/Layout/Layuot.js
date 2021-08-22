import Footer from "../Footer";
import Header from "../Header";

export const Layuot = ({ children, headerMenu, footerMenu, globalInfo }) => {
  return (
    <>
      <Header menu={headerMenu} global={globalInfo} />
      <div className="flex flex-col w-full flex-1">{children}</div>
      <Footer menu={footerMenu} global={globalInfo}/>
    </>
  );
};
