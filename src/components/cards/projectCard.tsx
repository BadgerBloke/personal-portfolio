import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
    category: string;
    title: string;
    img: string;
};

const ProjectCard = (props: Props) => {
    return (
        <div className="flex flex-col items-start">
            <div className="relative flex w-[250px] aspect-h-2 mb-5 aspect-w-3 flex-shrink-0">
                <Image
                    src={props.img}
                    alt={props.title}
                    fill
                    sizes="100%"
                    className="object-cover rounded-xl"
                />
            </div>
            <div>
                <span className="text-[.813rem] lg:text-sm text-text-light">
                    {props.category}
                </span>
                <h2 className="mb-5 text-xl lg:text-2xl">{props.title}</h2>
                <a
                    href="#"
                    className="flex gap-2 items-center text-title text-[.813rem] lg:text-sm group"
                >
                    View demo{" "}
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
