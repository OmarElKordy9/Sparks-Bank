import { ThemeProvider } from "styled-components";
import { dark } from "../Styles/Themes";
import GlobalStyles from "../Styles/GlobalStyles";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from "framer-motion";
import Footer from "../sections/Footer";
import styled from "styled-components";
import Header from "../components/Header";

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
background-color: #19191B;
`

const Users = () => {
  const containerRef = useRef(null);
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
          <main data-scroll-container ref={containerRef}>
            <Section >
            <Header />
            <Footer />
            </Section>
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default Users