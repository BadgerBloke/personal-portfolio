import {
    CircleStackIcon,
    CodeBracketIcon,
    CogIcon,
    CubeTransparentIcon,
    PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export const allSkills = [
    {
        title: "DevOps",
        icon: <CubeTransparentIcon className="w-4 h-4 stroke-[3px]" />,
        skills: [
            {
                name: "Kubernetes",
                level: "Basic",
                logo: "/img/skills/kubernetes.svg",
            },
            {
                name: "Docker",
                level: "Advanced",
                logo: "/img/skills/docker.svg",
            },
            {
                name: "Jenkins",
                level: "Intermediate",
                logo: "/img/skills/jenkins.svg",
            },
            {
                name: "Grafana",
                level: "Intermediate",
                logo: "/img/skills/grafana.svg",
            },
            {
                name: "Prometheus",
                level: "Intermediate",
                logo: "/img/skills/prometheus.svg",
            },
            {
                name: "Git",
                level: "Advanced",
                logo: "/img/skills/git.svg",
            },
            {
                name: "AWS",
                level: "Intermediate",
                logo: "/img/skills/aws.svg",
            },
            {
                name: "DigitalOcean",
                level: "Intermediate",
                logo: "/img/skills/digitalocean.svg",
            },
        ],
    },
    {
        title: "Programming Languages",
        icon: <CodeBracketIcon className="w-4 h-4 stroke-[3px]" />,
        skills: [
            {
                name: "JavaScript",
                level: "Advanced",
                logo: "/img/skills/javascript.svg",
            },
            {
                name: "TypeScript",
                level: "Advanced",
                logo: "/img/skills/typescript.svg",
            },
            {
                name: "Python",
                level: "Intermediate",
                logo: "/img/skills/python.svg",
            },
            {
                name: "Java",
                level: "Basic",
                logo: "/img/skills/java.svg",
            },
            {
                name: "Rust",
                level: "Basic",
                logo: "/img/skills/rust.svg",
            },
            {
                name: "HTML",
                level: "Advanced",
                logo: "/img/skills/html.svg",
            },
            {
                name: "CSS",
                level: "Advanced",
                logo: "/img/skills/css.svg",
            },
        ],
    },
    {
        title: "Full Stack Development",
        icon: <CogIcon className="w-4 h-4 stroke-[3px]" />,
        skills: [
            {
                name: "React",
                level: "Advanced",
                logo: "/img/skills/react.svg",
            },
            {
                name: "Next.js",
                level: "Advanced",
                logo: "/img/skills/next-js.svg",
            },
            {
                name: "Node.js",
                level: "Advanced",
                logo: "/img/skills/node-js.svg",
            },
            {
                name: "Django",
                level: "Intermediate",
                logo: "/img/skills/django.svg",
            },
            {
                name: "Tailwind CSS",
                level: "Intermediate",
                logo: "/img/skills/tailwind-css.svg",
            },
            {
                name: "Tauri",
                level: "Intermediate",
                logo: "/img/skills/tauri.svg",
            },
        ],
    },
    {
        title: "Databases & Data Management",
        icon: <CircleStackIcon className="w-4 h-4 stroke-[3px]" />,
        skills: [
            {
                name: "MongoDB",
                level: "Advanced",
                logo: "/img/skills/mongodb.svg",
            },
            {
                name: "PostgreSQL",
                level: "Intermediate",
                logo: "/img/skills/postgresql.svg",
            },
            {
                name: "Redis",
                level: "Intermediate",
                logo: "/img/skills/redis.svg",
            },
            {
                name: "MySQL",
                level: "Intermediate",
                logo: "/img/skills/mysql.svg",
            },
            {
                name: "Kafka",
                level: "Intermediate",
                logo: "/img/skills/kafka.svg",
            },
        ],
    },
    {
        title: "Business Analysis",
        icon: <PresentationChartBarIcon className="w-4 h-4 stroke-[3px]" />,
        skills: [
            {
                name: "Power BI",
                level: "Intermediate",
                logo: "/img/skills/power-bi.svg",
            },
            {
                name: "Python Pandas",
                level: "Intermediate",
                logo: "/img/skills/pandas.svg",
            },
            {
                name: "MS Excel",
                level: "Intermediate",
                logo: "/img/skills/excel.svg",
            },
            {
                name: "MS Word",
                level: "Intermediate",
                logo: "/img/skills/word.svg",
            },
            {
                name: "MS PowerPoint",
                level: "Intermediate",
                logo: "/img/skills/powerpoint.svg",
            },
        ],
    },
];
