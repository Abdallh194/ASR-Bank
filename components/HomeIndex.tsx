import AboutUs from "./AboutUs";
import Footer from "./common/Footer";
import CustomerSays from "./CustomerSays";
import NewWay from "./NewWay";
import PageHome from "./PageHome";
import Service from "./Service";

const HomeIndex = () => {
  return (
    <>
      <PageHome />
      <AboutUs />
      <Service />
      <NewWay />
      <CustomerSays />
      <Footer />
    </>
  );
};

export default HomeIndex;
