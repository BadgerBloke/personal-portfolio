import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import SocialButton from "@components/buttons/socialButton";
import InfoCard from "@components/cards/infoCard";
import { info, main, stats } from "@data/hero";

type Props = {
    themeName?: string;
};

const Hero = (props: Props) => {
    return (
        <section id="home" className="lg:mt-10 lg:mb-20">
            <div className="flex flex-col items-center grid-cols-4 gap-16 md:grid md:gap-8 lg:flex-row">
                <div className="flex flex-col items-center gap-6 pt-16 md:col-span-2 md:order-2 md:pt-4 ">
                    <h1 className="max-w-xs text-2xl font-semibold tracking-wider text-center lg:whitespace-nowrap lg:text-4xl font-titleFont md:mb-8">
                        {main.heading.l1}
                        <br /> {main.heading.l2[0]} <br /> {main.heading.l3}
                    </h1>
                    <div className="relative flex items-center justify-center w-56 p-4 mx-auto border rounded-full h-80 border-text">
                        <div className="flex items-end w-full h-full px-4 pt-4 overflow-hidden transition-colors duration-300 ease-in-out rounded-full bg-gradient-to-t from-cyan-500 to-body">
                            <div className="relative w-full -mb-1 overflow-hidden rounded-full aspect-h-13 aspect-w-8">
                                <Image
                                    src={main.image.src}
                                    alt={main.image.alt}
                                    fill
                                    sizes="100%"
                                    className="object-cover object-bottom"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="absolute top-20 -left-6">
                            <div className="relative w-16 opacity-10 aspect-1">
                                <Image
                                    src="/img/shape-wawes.svg"
                                    alt="Wave Shape"
                                    fill
                                    sizes="100%"
                                    className={`${
                                        props?.themeName === "dark-theme"
                                            ? "filter invert"
                                            : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-6 -right-4">
                            <div className="relative w-16 aspect-1 opacity-10">
                                <Image
                                    src="/img/shape-circle.svg"
                                    alt="Circle Shape"
                                    fill
                                    sizes="100%"
                                    className={`${
                                        props?.themeName === "dark-theme"
                                            ? "filter invert"
                                            : ""
                                    }`}
                                />
                            </div>
                        </div>
                    </div>
                    <ul className="flex gap-4">
                        <li>
                            <SocialButton href={main.social.github}>
                                <BsGithub className="w-6 h-6" />
                            </SocialButton>
                        </li>
                        <li>
                            <SocialButton href={main.social.linkedin}>
                                <BsLinkedin className="w-6 h-6" />
                            </SocialButton>
                        </li>
                        <li>
                            <SocialButton href={main.social.twitter}>
                                <BsTwitter className="w-6 h-6" />
                            </SocialButton>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 md:order-1 md:mt-40">
                    <InfoCard title="Biography">
                        {info.bio.description}
                    </InfoCard>
                    <InfoCard title="Contact">
                        {info.contact.l1}
                        <br />
                        {info.contact.l2}
                        <br />
                        {info.contact.l3}
                    </InfoCard>
                    <InfoCard title="Services">
                        {info.services.l1}
                        <br />
                        {info.services.l2}
                        <br />
                        {info.services.l3}
                    </InfoCard>
                </div>

                <div className="flex flex-col items-start justify-start w-full gap-6 md:gap-10 md:items-end md:h-full md:mt-40 md:order-3 md:justify-evenly">
                    <InfoCard
                        title="Years of Experience"
                        className="w-full text-2xl font-semibold md:text-right"
                        headingClass="md:text-right"
                    >
                        {stats.experience}
                    </InfoCard>
                    <InfoCard
                        title="Completed Projects"
                        className="w-full text-2xl font-semibold md:text-right"
                        headingClass="md:text-right"
                    >
                        {stats.projects}
                    </InfoCard>
                    <InfoCard
                        title="Companies Worked"
                        className="w-full text-2xl font-semibold md:text-right"
                        headingClass="md:text-right"
                    >
                        {stats.clients}
                    </InfoCard>
                </div>
            </div>
        </section>
    );
};

export default Hero;
