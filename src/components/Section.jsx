import React from "react";

const Section = ({title = null, children, className, titleAlignement = "text-center" }) => {
    return (
    <section className={`my-8 px-4 ${className}`}>
        {title && <h1 className={`text-3xl font-bold mb-4 ${titleAlignement}`}>{title}</h1>}
        {children}
    </section>
    );
};

export default Section;