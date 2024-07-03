import About from "./About";
import Banner from "./Banner";
import BannerFooter from "./BannerFooter";
import Faq from "./Faq";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";
import Status from "./Status";
import Testmonial from "./Testmonial";

function App() {
  return (
    <>
      <main className="font-inter">
        <div className="relative h-full w-full ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
          <div className="container mx-auto">
            <div>
              <Navbar></Navbar>
            </div>
            <div>
              <Banner></Banner>
            </div>
            <div>
              <Status></Status>
            </div>
            <div className="mt-[350px]">
              <About></About>
            </div>
            <div className="mt-16">
              <Services></Services>
            </div>
            <div className="mt-52">
              <Testmonial></Testmonial>
            </div>
            <div className="mt-48">
              <Faq> </Faq>
            </div>
            <div>
              <BannerFooter></BannerFooter>
            </div>
          </div>
          <div className="mt-[160px]">
            <Footer></Footer>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
