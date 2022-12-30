"use client";
import NavButton from "@components/buttons/navButton";
import {
    AcademicCapIcon,
    Bars3Icon,
    BriefcaseIcon,
    BuildingOffice2Icon,
    ChatBubbleLeftRightIcon,
    HomeIcon,
    MoonIcon,
    SunIcon,
    TrophyIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "store";
type Props = {};

const Navbar = (props: Props) => {
    const themeCtx: {
        theme?: string;
        themeHandler: (themeName: string) => void;
    } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>("home");

    const changeTheme = (themeName: string) => {
        if (themeCtx.theme === themeName) return;
        themeCtx.themeHandler(themeName);
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            if (scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (scrollY > windowHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if current section id is in view then set active id
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute("id");

                // console.log(
                //     "sectionId",
                //     sectionId,
                //     "sectionTop",
                //     sectionTop,
                //     "sectionHeight",
                //     sectionHeight,
                //     "scrollY",
                //     scrollY,
                //     'more than', scrollY > sectionTop,
                //     'less than', scrollY <= (sectionTop + sectionHeight)
                // );
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    setActiveId(sectionId);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <header
            className={`h-14 lg:h-16 w-full flex items-end lg:items-center fixed bottom-8 transition duration-300 ease-in-out lg:top-0 z-[100] px-4 ${
                isScrolled ? "" : "lg:bg-body"
            }`}
        >
            <nav
                className={`flex flex-grow w-full ${
                    isMenuOpen
                        ? "justify-center flex-col gap-4"
                        : "justify-between"
                } shadow-lg rounded-3xl p-8 items-end bg-body/50 backdrop-blur-md lg:bottom-full lg:py-4 lg:px-6 ${
                    isScrolled ? "" : "lg:shadow-none"
                } transition-all duration-300 ease-in-out lg:items-center max-w-lg sm:mx-auto lg:max-w-5xl`}
            >
                <Link
                    href="#"
                    className={`font-medium text-text ${
                        isMenuOpen ? "hidden" : ""
                    }`}
                >
                    MKSingh
                </Link>
                <ul
                    className={`grid items-center -m-2 self-stretch justify-center w-full grid-cols-3 gap-x-3 gap-y-5 list-none lg:gap-5 lg:flex ${
                        isMenuOpen ? "" : "hidden"
                    }`}
                >
                    <NavButton href="#home" currentId={activeId}>
                        <HomeIcon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-4 lg:h-4 lg:hidden" />{" "}
                        Home
                    </NavButton>
                    <NavButton href="#skills" currentId={activeId}>
                        <TrophyIcon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-4 lg:h-4 lg:hidden" />{" "}
                        Skills
                    </NavButton>
                    <NavButton href="#qualification" currentId={activeId}>
                        <AcademicCapIcon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-4 lg:h-4 lg:hidden" />{" "}
                        Qualification
                    </NavButton>
                    <NavButton href="#services" currentId={activeId}>
                        <BriefcaseIcon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-4 lg:h-4 lg:hidden" />{" "}
                        Services
                    </NavButton>
                    <NavButton href="#projects" currentId={activeId}>
                        <BuildingOffice2Icon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-4 lg:h-4 lg:hidden" />{" "}
                        Projects
                    </NavButton>
                    <NavButton href="#contact" currentId={activeId}>
                        <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-4 lg:h-4 lg:hidden" />{" "}
                        Contact
                    </NavButton>
                </ul>
                <div
                    className={`flex justify-end gap-6 text-2xl ${
                        isMenuOpen ? "flex-grow w-full" : ""
                    } cursor-pointer text-title`}
                >
                    {/* Theme Change Button */}
                    {themeCtx.theme === "dark-theme" ? (
                        <SunIcon
                            onClick={() => changeTheme("light-theme")}
                            className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
                        />
                    ) : (
                        <MoonIcon
                            onClick={() => changeTheme("dark-theme")}
                            className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
                        />
                    )}

                    {/* Toggle Button */}
                    {isMenuOpen ? (
                        <XMarkIcon
                            className="w-6 h-6 -mb-2 -mr-2 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    ) : (
                        <Bars3Icon
                            className="w-6 h-6 lg:hidden"
                            onClick={() => setIsMenuOpen(true)}
                        />
                    )}
                </div>
            </nav>
            <button
                onClick={scrollToTop}
                className={`fixed ${
                    showButton ? "translate-x-0" : "translate-x-20"
                } p-3 rounded-md shadow-md h-fit w-fit right-4 bottom-32 lg:bottom-6 transform transition duration-500 ease-in-out backdrop-blur-md bg-body/50 outline-none border-none ring-0 hover:-translate-y-2`}
            >
                <ArrowUpIcon className="w-5 h-5 text-title" />
            </button>
        </header>
    );
};

export default Navbar;
