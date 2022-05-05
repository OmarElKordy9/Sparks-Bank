import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/visa laptop.mp4';
import ScrollImg from '../assets/scroll-down.png';
import "@fontsource/audiowide";
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';


const VideoConntaier = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`}
`
const Title = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};


h1{
font-family: 'Audiowide';
font-size: ${props => props.theme.fontBig};
text-shadow: 1px 1px 1px ${props => props.theme.body};

@media only Screen and (max-width: 70em){
    font-size: 8rem;
}
@media only Screen and (max-width: 55em){
    font-size: 6rem;
}
@media only Screen and (max-width: 41em){
    font-size: 5rem;
}
}

h2{
    font-family: 'Montserrat', Sans-Serif;
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    font-weight: 500;
    }

    div{
        display: flex;
        flex-direction: row;
    }

`
const ScrollContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 10em;
cursor: pointer;

h3{
    font-family:'Montserrat', Sans-Serif;
    font-size:${props => props.theme.fontmd};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    font-weight: 400;
    margin-bottom: 0;
}

img{
    width: 40px;
    height: auto;
}
`
const container = {
    hidden:{
        opacity:0,
    },
    show: {
        opacity: 1,
        transition:{
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden:{
        opacity:0,
    },
    show: {
        opacity: 1,
    }
}

const CoverVideo = () => {

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let element = document.querySelector(id);

        scroll.scrollTo(element,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0, 0.35, 1]
            })
    }

  return (
    <VideoConntaier>
        <DarkOverlay/>
        <Title variants ={container} initial="hidden" animate="show">
            <div>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.12" data-scroll-speed="4">S</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.11" data-scroll-speed="4">p</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.10" data-scroll-speed="4">a</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">r</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.08" data-scroll-speed="4">k</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.07" data-scroll-speed="4">s</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">B</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.05" data-scroll-speed="4">a</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">n</motion.h1>
                <motion.h1 variants ={item} data-scroll data-scroll-delay="0.03" data-scroll-speed="4">k</motion.h1>
            </div>
            <motion.h2 variants ={item} data-scroll data-scroll-delay="0.03" data-scroll-speed="2">Fast . Secure . No Fees</motion.h2>
            <ScrollContainer onClick={() => handleScroll('.about')}>
                <motion.h3 variants ={item} data-scroll-speed="1">Scroll down</motion.h3>
                <motion.img variants ={item} data-scroll-speed="1" src={ScrollImg} alt="Scroll"/>
            </ScrollContainer>
        </Title>
        <video src={MainVideo}     type="video/mp4"  autoPlay muted loop />
    </VideoConntaier>
  )
}

export default CoverVideo