import ProjectCard from "@components/cards/projectCard";
import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import Slider from "@components/swiper";
import { projects } from "@data/projects";
import { SwiperSlide } from "swiper/react";

type Props = {};

const Projects = (props: Props) => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center w-full py-10 lg:mb-10"
        >
            <SectionTitle>Projects</SectionTitle>
            <SectionSubTitle>Most recent work</SectionSubTitle>

            <div className="w-full">
                <Slider>
                    {projects.map((project, index) => (
                        <SwiperSlide
                            className="relative flex justify-center w-full h-full mb-10 lg:mb-14"
                            key={index}
                        >
                            <ProjectCard
                                title={project.title}
                                category={project.category}
                                img={project.img}
                            />
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Projects;
