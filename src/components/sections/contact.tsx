import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import InputLabelBlock from "@components/inputs/inputLabelBlock";
import TextAreaLabelBlock from "@components/inputs/textAreaLabelBlock";
import { contactOptions } from "@data/contact";
import {
    ArrowRightIcon,
    ArrowUpRightIcon,
    ChatBubbleLeftEllipsisIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        project: "",
    });

    const { full_name, email, project } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <section
            id="contact"
            className="flex flex-col items-center w-full py-10 lg:mb-5"
        >
            <SectionTitle>Contact</SectionTitle>
            <SectionSubTitle>Get in touch</SectionSubTitle>

            <div className="w-full">
                <div className="flex flex-col gap-14 md:gap-32 md:flex-row md:flex-wrap md:justify-center">
                    <div className="flex flex-col gap-12">
                        <h3 className="flex items-center justify-center gap-2 text-[.813rem] lg:text-sm font-semibold lg:mb-0">
                            <ChatBubbleLeftEllipsisIcon className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2px]" />{" "}
                            Talk to me
                        </h3>
                        <div className="grid justify-center grid-cols-2 gap-8 mx-auto gap-x-20 md:flex md:flex-col lg:gap-12">
                            {contactOptions.map((option, index) => (
                                <div
                                    className="flex flex-col items-start gap-3 text-[.813rem] lg:text-sm"
                                    key={index}
                                >
                                    <span className="text-text-light">
                                        {option.title}
                                    </span>
                                    <span className="font-titleFont text-title">
                                        {option.value}
                                    </span>
                                    {option.actionLink ? (
                                        <a
                                            className="inline-flex items-center gap-2 w-max text-title group"
                                            href="#"
                                        >
                                            Wite me{" "}
                                            <ArrowRightIcon className="w-4 h-4 transition duration-300 ease-in-out transform group-hover:translate-x-2" />{" "}
                                        </a>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 lg:gap-12">
                        <h3 className="flex items-start justify-center gap-2 text-[.813rem] lg:text-sm font-semibold">
                            <PaperAirplaneIcon className="w-4 h-4 stroke-[2px] -rotate-45 lg:w-5 lg:h-5" />{" "}
                            Write me your project
                        </h3>
                        <form className="flex flex-col gap-28 lg:gap-32 md:w-[360px]">
                            <InputLabelBlock
                                label="Full Name"
                                placeholder="Write your full name"
                                type="text"
                                name="full_name"
                                value={full_name}
                                onChange={onChange}
                            />
                            <InputLabelBlock
                                label="Email"
                                placeholder="Write your email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                            <TextAreaLabelBlock
                                label="Project"
                                placeholder="Write your project"
                                name="project"
                                value={project}
                                onChange={onChange}
                            />

                            <button
                                className="inline-flex gap-3 mt-24 text-xl font-semibold border-none outline-none cursor-pointer group bg-none lg:text-2xl w-fit"
                                type="submit"
                            >
                                Submit{" "}
                                <ArrowUpRightIcon className="w-6 h-6 stroke-[3px] group-hover:translate-x-2 transform transition group-hover:-translate-y-2 duration-300 ease-in-out" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
