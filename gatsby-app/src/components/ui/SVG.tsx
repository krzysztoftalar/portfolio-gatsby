import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface IProps {
    icon: string;
}

const SVG: React.FC<IProps> = ({ icon }): JSX.Element => {
    const { svg } = useStaticQuery(graphql`
        query {
            svg: file(relativePath: { eq: "sprite.svg" }) {
                publicURL
            }
        }
    `);

    return (
        <svg>
            <use xlinkHref={`${svg.publicURL}#icon-${icon}`} />
        </svg>
    );
};

export default SVG;
