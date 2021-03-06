import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MotionValue } from 'framer-motion';
// Imports from src
import { VideoWrapper } from '../../../styles/pages/homeStyles';

interface Props {
    y: MotionValue;
}

const Video: React.FC<Props> = ({ y }) => {
    const data = useStaticQuery(graphql`
        query {
            video: file(relativePath: { eq: "banner.mp4" }) {
                publicURL
            }
        }
    `);

    return (
        <VideoWrapper style={{ y }}>
            <video src={data.video.publicURL} autoPlay muted loop>
                Your browser is not supported!
            </video>
        </VideoWrapper>
    );
};

export default Video;
