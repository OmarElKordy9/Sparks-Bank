import { ThemeProvider } from "styled-components";
import { dark } from "./Styles/Themes";
import GlobalStyles from "./Styles/GlobalStyles";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import  { useEffect, useState } from "react";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])
  

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
          {loaded ? null : <Loader />}
          </AnimatePresence>
          <AnimatePresence>
          <main data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Footer />
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
