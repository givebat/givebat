import React from 'react';
import styled from 'styled-components';

import Header from '../../common/Header';

const HeroImage = styled.div`
    background-image: url(${props => props.imgSrc});
    background-position: center;
    background-size: cover;

    width: 100%;
    height: 464px;

    padding: 0;
    margin: 0;

    @media(max-width: 738px) {
        height: 250px;
    }
`;

export default (props) => {
    return (
        <>
            <Header notch></Header>
            <HeroImage imgSrc={props.heroImage} />
        </>
    )
}