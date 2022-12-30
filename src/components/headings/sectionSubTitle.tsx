type Props = {
    children: string;
};

const SectionSubTitle = (props: Props) => {
    return <span className="text-text-light mb-12 text-[.813rem] lg:text-sm">{props.children}</span>;
};

export default SectionSubTitle;
