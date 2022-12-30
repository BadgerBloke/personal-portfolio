import ServiceCard from "@components/cards/serviceCard";
import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import { allServices } from "@data/services";

type Props = {};

const Services = (props: Props) => {
    return (
        <section
            id="services"
            className="relative flex flex-col items-center w-full py-10 lg:mb-10"
        >
            <SectionTitle>Services</SectionTitle>
            <SectionSubTitle>What i offer</SectionSubTitle>
            <div className="flex flex-col gap-10 md:gap-20 md:flex-row md:flex-wrap md:justify-center">
                {allServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        description={service.description}
                    >
                        {service.title.l1} <br />
                        {service.title.l2}
                    </ServiceCard>
                ))}
            </div>
        </section>
    );
};

export default Services;
