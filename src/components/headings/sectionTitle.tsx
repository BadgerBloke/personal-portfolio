type Props = {
    children: string;
};

const SectionTitle = (props: Props) => {
    return (
        <h2 className="mb-1 text-2xl font-semibold lg:text-4xl">
            {props.children}
        </h2>
    );
};

export default SectionTitle;
