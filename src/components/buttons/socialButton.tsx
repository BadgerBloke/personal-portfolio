type Props = {
    children: React.ReactNode;
    href: string;
};

const SocialButton = (props: Props) => {
    return (
        <a
            target="_blank"
            rel="noreferrer noopener"
            href={props.href}
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-body text-icon hover:text-icon-active hover:shadow-lg md:items-end"
        >
            {props.children}
        </a>
    );
};

export default SocialButton;
