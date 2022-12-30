import Image from "next/image";

type Props = {
    icon: React.ReactNode;
    title: string;
    skills: {
        name: string;
        level: string;
        logo: string;
    }[];
};

const SkillCard = (props: Props) => {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="flex justify-center w-full gap-2 text-xs font-semibold">
                {props.icon}
                {props.title}
            </h3>
            <div className="grid max-w-xs grid-cols-3 mx-auto gap-x-8 gap-y-10">
                {props.skills.map((skill) => (
                    <div
                        className="flex flex-col items-center gap-1"
                        key={skill.name?.toLowerCase().split(" ").join("")}
                    >
                        <SkillIcon img={skill.logo} alt={skill.name} />
                        <h3 className="mt-1 text-xs leading-3 text-center">
                            {skill.name}
                        </h3>
                        <span className="text-text-light text-[10px] leading-[10px]">
                            {skill.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

type IconProps = {
    img: string;
    alt: string;
};

const SkillIcon = (props: IconProps) => {
    return (
        <div className="w-20 h-[100px] bg-container rounded-[48px] flex items-center group justify-center">
            <div className="relative flex w-10 aspect-1 group-hover:animate-ping-once">
                <Image
                    src={props.img}
                    alt={props.alt}
                    fill
                    sizes="100%"
                />
            </div>
        </div>
    );
};

export default SkillCard;
