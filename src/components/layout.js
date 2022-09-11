import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="p-6 md:p-9 md:px-11">{children}</div>
      <Footer />

    </>
  );
};

export default Layout;
