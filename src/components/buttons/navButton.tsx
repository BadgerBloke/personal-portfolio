type Props = {
    children: React.ReactNode;
    href: string;
    currentId: string | null;
};

const NavButton = (props: Props) => {
    return (
        <li>
            <a
                href={props.href}
                className={`flex flex-col py-3 px-2 hover:shadow-md rounded-xl lg:rounded-lg lg:px-4 lg:py-2 text-sm lg:items-end transition-all duration-300 ease-in-out items-center h-full gap-1 sm:text-lg leading-[18px] lg:leading-[14px] lg:text-sm font-light lg:flex-row hover:text-icon-active ${
                    props.currentId === props.href.slice(1)
                        ? "shadow-md text-icon-active"
                        : "text-icon"
                }`}
            >
                {props.children}
            </a>
        </li>
    );
};

export default NavButton;
