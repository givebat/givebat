import React from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import HeaderSection from './HeaderSection';
import FeaturedSection from './FeaturedSection';
import BategoriesSection from './BategoriesSection';
import FeaturedSectionOverflow from './FeaturedSectionOverflow';

const ContentSectionContainer = styled.div`
    width: 100%;
`;

const GradientContainerTop = styled.div`
    background-image: linear-gradient(
        to bottom,
        rgba(50, 106, 255, 0.14) 0%,
        rgba(255, 50, 207, 0)
    );

    position: absolute;
    top: 0;
    width: 100%;
    height: 472px;
    z-index: -1;
`;

const GradientContainerBottom = styled.div`
    background: linear-gradient(
        0deg,
        rgba(255, 50, 143, 0.14) 0.07%,
        rgba(50, 163, 255, 0) 100%
    );

    /* position: absolute; */
    bottom: 0;
    width: 100%;
    margin-top: -472px;
    height: 472px;
    z-index: -1;
`;

export default () => {
    return (
        <>
            <Helmet>
                <title>givebat</title>
            </Helmet>

            <GradientContainerTop />
            <HeaderSection />
            <ContentSectionContainer>
                <FeaturedSection />

                <BategoriesSection />

                <FeaturedSectionOverflow />
            </ContentSectionContainer>
            <GradientContainerBottom />
        </>
    );
};
