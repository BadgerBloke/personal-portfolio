import SkillCard from "@components/cards/skillCard";
import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import { allSkills } from "@data/skills";

type Props = {};

const Skills = (props: Props) => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center w-full py-10 lg:mb-10"
        >
            <SectionTitle>Skills</SectionTitle>
            <SectionSubTitle>My favorite skills</SectionSubTitle>

            <div className="flex flex-col gap-10 md:gap-20 md:flex-row md:flex-wrap md:justify-center">
                {
                    allSkills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            skills={skill.skills}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Skills;
