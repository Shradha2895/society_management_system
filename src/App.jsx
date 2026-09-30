import MytmakaanHomepage from "./components/Mytmakaanhomepage";
import AppShowcase from "./components/AppShowcase";
import Features from "./components/Features";
import LessHassle from "./components/Lesshassle";
import GettingStarted from "./components/Gettingstarted";
import AppScreens from "./components/Appscreens";
import BuiltForEveryone from "./components/Builtforeveryone";
import DesignedAround from "./components/Designedaround";
import OneApp from "./components/Oneapp";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <MytmakaanHomepage />
      <AppShowcase />
      <Features />
      <LessHassle />
      <GettingStarted />
      <AppScreens />
      <BuiltForEveryone />
      <DesignedAround />
       <OneApp />
           <CtaSection />
              <Faq /> 
                <Footer />

    </>
  );
};

export default App;