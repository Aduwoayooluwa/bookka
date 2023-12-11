"use client"
import { useEffect, useState } from "react"; 
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Boost from "./sections/Boost";
import HowItWorksSection from "./sections/HowItWorks";
import Footer from "../home/components/Footer";
import ScrollUp from "@/assets/icons/scroll_up.svg";
import Image from "next/image";

export default function Index() {
    // State to track if the user has scrolled 
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        // Registering scroll events
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        scrollSpy.update();

        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > window.innerHeight) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= window.innerHeight) {
                setShowScroll(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', checkScrollTop);

        // Clean-up function
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="relative">
            <Element name="test1" className="element">
                <Hero />
            </Element>
            <Element name="test1" className="element">
                <Features />
            </Element>
            <Element name="test2" className="element">
                <HowItWorksSection />
            </Element>
            <Element name="boost" className="element">
                <Boost />
            </Element>
            <Footer />

            {showScroll && (
                <button onClick={scrollToTop} className="bg-white rounded-full p-3 bottom-20 shadow-md right-10 fixed">
                    <Image src={ScrollUp} alt="scroller" width={30} height={30} />
                </button>
            )}
        </div>
    )
}
