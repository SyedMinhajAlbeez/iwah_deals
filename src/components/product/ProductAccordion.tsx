"use client";

import { FC, useState } from "react";

interface AccordionSectionProps {
    title: string;
    content: string;
}

const AccordionSection: FC<AccordionSectionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-5 text-left focus:outline-none"
            >
                <span className={`text-base font-semibold transition-colors ${isOpen ? "text-[#F98814]" : "text-gray-800"}`}>
                    {title}
                </span>
                <span className={`text-xl font-light transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    +
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
            >
                <p className="text-sm leading-relaxed text-gray-500 font-medium">
                    {content}
                </p>
            </div>
        </div>
    );
};

interface ProductAccordionProps {
    description?: string;
    careInstructions?: string;
    disclaimer?: string;
}

export const ProductAccordion: FC<ProductAccordionProps> = ({
    description,
    careInstructions,
    disclaimer,
}) => {
    return (
        <div className="mt-4">
            {description && <AccordionSection title="Description" content={description} />}
            {careInstructions && <AccordionSection title="Care Instructions" content={careInstructions} />}
            {disclaimer && <AccordionSection title="Disclaimer" content={disclaimer} />}
        </div>
    );
};
