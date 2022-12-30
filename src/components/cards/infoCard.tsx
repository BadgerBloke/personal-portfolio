import InfoTitle from "@components/headings/infoTitle";
import React from "react";

type Props = {
    title: string;
    children: React.ReactNode;
    className?: string;
    headingClass?: string;
};

const InfoCard = (props: Props) => {
    return (
        <article className="flex flex-col items-start justify-start gap-3">
            <InfoTitle className={props.headingClass}>{props.title}</InfoTitle>
            <p className={`font-titleFont text-title ${props.className}`}>{props.children}</p>
        </article>
    );
};

export default InfoCard;
