import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import { HeartIcon } from "@heroicons/react/24/solid";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

type Props = {};

const socialLinkClass =
    "transition h-5 w-5 duration-300 ease-in-out transform text-icon-active hover:-translate-y-1 group-hover:-translate-y-1";
const Footer = (props: Props) => {
    return (
        <footer>
            <div className="px-12 pt-0 pb-32 text-center lg:py-4">
                <SectionTitle>MKSingh</SectionTitle>
                <SectionSubTitle>DevOps Engineer</SectionSubTitle>

                <ul className="flex justify-center gap-10 m-10">
                    <li>
                        <FooterLink href="#home">Home</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#skills">Skills</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#projects">Projects</FooterLink>
                    </li>
                </ul>
                <ul className="flex justify-center gap-5">
                    <li>
                        <SocialLink href="https://www.github.com/ca-mksingh">
                            <BsGithub className={socialLinkClass} />
                        </SocialLink>
                    </li>
                    <li>
                        <SocialLink href="https://www.linkedin.com/in/ca-mksingh/">
                            <BsLinkedin className={socialLinkClass} />
                        </SocialLink>
                    </li>
                    <li>
                        <SocialLink href="https://www.twitter.com/ca_mksingh">
                            <BsTwitter className={socialLinkClass} />
                        </SocialLink>
                    </li>
                </ul>
                <span className="block mt-16 text-text-light text-xs lg:text-[.813rem]">
                    &#169; Copyright MKSingh. All rights reserved. <br />
                    <span className="inline-flex">
                    Made with <HeartIcon className="w-4 h-4 mx-1 text-cyan-500" /> by me.
                    </span>
                </span>
            </div>
        </footer>
    );
};

const FooterLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a
            href={href}
            className="transition-all duration-300 ease-in-out text-title hover:underline"
        >
            {children}
        </a>
    );
};

const SocialLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a className="group" href={href}>
            {children}
        </a>
    );
};

export default Footer;
