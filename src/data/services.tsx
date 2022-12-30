import {
    ChartPieIcon,
    CogIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export const allServices = [
    {
        icon: (
            <CogIcon className="w-8 h-8 mb-3 transition-transform duration-700 stroke-[2.5px] group-hover:rotate-[360deg]" />
        ),
        title: {
            l1: "FullStack",
            l2: "Development",
        },
        description:
            "Service that provides the best quality and at the request of the client, with professional work and customer support.",
    },
    {
        icon: (
            <CubeTransparentIcon className="w-8 h-8 mb-3 transition-transform duration-700 stroke-[2.5px] group-hover:rotate-[360deg]" />
        ),
        title: {
            l1: "DevOps",
            l2: "Development",
        },
        description:
            "Service that provides the best quality and at the request of the client, with professional work and customer support.",
    },
    {
        icon: (
            <ChartPieIcon className="w-8 h-8 mb-3 transition-transform duration-700 stroke-[2.5px] group-hover:rotate-[360deg]" />
        ),
        title: {
            l1: "Business",
            l2: "Analysis",
        },
        description:
            "Service that provides the best quality and at the request of the client, with professional work and customer support.",
    },
];
