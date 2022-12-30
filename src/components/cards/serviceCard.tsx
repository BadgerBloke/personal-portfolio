type Props = {
    icon: React.ReactNode;
    children: React.ReactNode;
    description: string;
};

const ServiceCard = (props: Props) => {
    return (
        <div className="p-[10px] group transition-colors ease-in-out duration-500 hover:border-text-light border-[1.8px] rounded-full border-body">
            <article className="relative w-56 h-fit bg-container text-center py-14 px-4 rounded-[7.25rem] items-center flex flex-col">
                {props.icon}
                <h2 className="mb-6 text-xl font-semibold lg:text-2xl">
                    {props.children}
                </h2>
                <p>{props.description}</p>
            </article>
        </div>
    );
};

export default ServiceCard;
