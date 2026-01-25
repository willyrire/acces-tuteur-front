import React from "react";

const Section = ({title = null, children, className, titleAlignement = "text-center" }) => {
    return (
    <section className={`px-4 ${className}`}>
        {title && <h1 className={`text-3xl font-bold ${titleAlignement}`}>{title}</h1>}
        {children}
    </section>
    );
};

export default Section;