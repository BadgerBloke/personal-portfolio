import React from "react";

type Props = {
    description: string;
    name: string;
    role: string;
};

const TestimonialCard = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-start max-w-sm mx-auto mb-16 text-center lg:max-w-lg">
            <p className="mb-6 font-titleFont text-title lg:mb-8 lg:text-2xl">{props.description}</p>
            <div>
                <h3 className="font-bodyFont text-[.813rem] lg:text-sm mb-1">{props.name}</h3>
                <span className="text-xs lg:text-[.813rem] text-text-light">{props.role}</span>
            </div>
        </div>
    );
};

export default TestimonialCard;
