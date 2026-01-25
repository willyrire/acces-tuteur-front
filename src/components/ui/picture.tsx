import React from 'react';

type PictureProps = {
    source: string;
    alt: string;
    className?: string;
}
const Picture = ({ source, alt, className='' }: PictureProps) => (
    <img src={source} alt={alt} className={`${className}`} />
);

export { Picture as default }