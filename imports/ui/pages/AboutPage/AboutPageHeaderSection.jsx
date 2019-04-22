import React from 'react';
import styled from 'styled-components';

import Header from '../../common/Header';

// import HeroImage1 from '../../images/page-elements/header@3x.png';

const HeroImage = styled.div`
    background-image: url(${props => props.imgSrc});
    background-position: left top;
    background-size: contain;
    background-repeat: no-repeat;

    width: 100%;
    height: 400px;

    padding: 0;
    margin: 0;

    @media(max-width: 1030px) {
        background-size: cover;
    }
    @media(max-width: 738px) {
        height: 250px;
    }
`;

export default () => {
    return (
        <>
            <Header notch />
            <HeroImage imgSrc='/images/page-elements/header@3x.png' />
        </>
    )
}