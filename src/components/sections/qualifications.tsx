import QualificationCard from "@components/cards/qualificationCard";
import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import { education, experience } from "@data/qualifications";
import {
    BuildingLibraryIcon,
    BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
    themeName?: string;
};

const Qualifications = (props: Props) => {
    return (
        <section
            id="qualification"
            className="relative flex flex-col items-center w-full py-10 lg:mb-10"
        >
            <SectionTitle>Qualifications</SectionTitle>
            <SectionSubTitle>Experience & education</SectionSubTitle>
            <div className="flex flex-col gap-10 md:gap-40 md:flex-row md:flex-wrap md:justify-center">
                <QualificationCard
                    icon={
                        <BuildingLibraryIcon className="w-4 h-4 stroke-[3px]" />
                    }
                    title="Education"
                    learnings={education}
                />
                <QualificationCard
                    icon={
                        <BuildingOffice2Icon className="w-4 h-4 stroke-[3px]" />
                    }
                    title="Experience"
                    learnings={experience}
                />
            </div>
            <div className="absolute -right-12 bottom-3 rotate-[15] opacity-10">
                <Image
                    src="/img/shape-circle.svg"
                    alt="Qualification Image"
                    width={150}
                    height={150}
                    className={`${
                        props?.themeName === "dark-theme"
                            ? "filter invert"
                            : ""
                    }`}
                />
            </div>
        </section>
    );
};

export default Qualifications;
