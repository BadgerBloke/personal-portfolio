type Props = {
    icon: React.ReactNode;
    title: string;
    learnings: {
        title: string;
        institute: string;
        duration: string;
    }[];
};

const QualificationCard = (props: Props) => {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="flex items-center justify-center w-full gap-2 text-xs font-semibold">
                {props.icon}
                {props.title}
            </h3>
            <div className="flex flex-col gap-8">
                {props.learnings.map((edu, index) => (
                    <QualificationInfo
                        key={index}
                        title={edu.title}
                        institute={edu.institute}
                        duration={edu.duration}
                    />
                ))}
            </div>
        </div>
    );
};

type InfoProps = {
    title: string;
    institute: string;
    duration: string;
};

const QualificationInfo = (props: InfoProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-[.938rem] lg:text-base">{props.title}</h3>
            <div className="flex flex-col text-text-light leading-[.813rem] text-[.813rem] lg:leading-[14px] lg:text-sm mb-3">
                <span>{props.institute}</span>
                <span>{props.duration}</span>
            </div>
        </div>
    );
};
export default QualificationCard;
