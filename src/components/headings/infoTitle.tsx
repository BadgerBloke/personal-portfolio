type Props = {
    children: string;
    className?: string;
};

const InfoTitle = (props: Props) => {
    return <h3 className={`w-full text-xs font-normal tracking-widest uppercase whitespace-nowrap font-bodyFont text-text-light ${props.className}`}>{props.children}</h3>;
};

export default InfoTitle;
