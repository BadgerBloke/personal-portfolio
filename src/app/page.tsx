'use client';
import Contact from "@components/sections/contact";
import Hero from "@components/sections/hero";
import Projects from "@components/sections/projects";
import Qualifications from "@components/sections/qualifications";
import Services from "@components/sections/services";
import Skills from "@components/sections/skills";
import Testimonials from "@components/sections/testimonials";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import ThemeContext from "store";

const HomePage = () => {
    const themeCtx: { theme?: string } = useContext(ThemeContext);
    return (
        <>
            <Hero themeName={themeCtx.theme} />
            <Skills />
            <Qualifications themeName={themeCtx.theme} />
            <Services />
            <Projects />
            <Testimonials themeName={themeCtx.theme} />
            <Contact />
        </>
    );
};

export default HomePage;
