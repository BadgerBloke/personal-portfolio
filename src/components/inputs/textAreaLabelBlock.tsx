import { FC, TextareaHTMLAttributes } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    labelClassName?: string;
    inputClassName?: string;
}

const TextAreaLabelBlock: FC<InputProps> = ({
    labelClassName,
    inputClassName,
    label,
    ...props
}) => {
    return (
        <div className="relative flex flex-col">
           <label className={`z-10 rounded-lg absolute -top-2 lg:-top-3 left-4 lg:left-6 bg-body px-1`} htmlFor={props.name}>
                {label}
            </label>
            <textarea
                name={props.name}
                required
                placeholder={props.placeholder}
                className={`absolute top-0 h-40 resize-none w-full border-text-light p-3 lg:p-4 bg-transparent border-2 rounded-3xl font-titleFont text-[.938rem] text-title bg-none outline-none lg:text-base hover:border-title transition-colors duration-300 focus:ring-cyan-500 ${inputClassName}`}
               {...props}
            />
        </div>
    );
};

export default TextAreaLabelBlock;
