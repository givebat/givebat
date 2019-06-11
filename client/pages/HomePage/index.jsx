import React from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import HeaderSection from './HeaderSection';
import FeaturedSection from './FeaturedSection';
import BategoriesSection from './BategoriesSection';

const ContentSectionContainer = styled.div`
    background-color: #F2F2F2;
    width: 100%;
`;

export default () => {
    return (
        <>
            <Helmet>
                <title>givebat</title>
            </Helmet>

            <ContentSectionContainer>
                
                <HeaderSection />

                <FeaturedSection />

                <BategoriesSection />

            </ContentSectionContainer>
        </>
    )
}