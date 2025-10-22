import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayouts;
