import styled from 'styled-components';
import React, { Fragment } from 'react';

import Header from '../../common/Header';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
    min-height: 220px;
    width: 100%;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const LogoWordMarkContainer = styled.div`
    max-width: 984px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media (max-width: 1030px) {
        max-width: none;
    }
`;

const LogoWordMark = styled(NavLink)`
    background-image: url('/images/page-elements/gb_word_homepage.png');
    background-size: cover;
    background-position: center;

    height: 60px;
    width: 217px;

    @media (max-width: 1030px) {
        margin-left: 20px;
    }
`;

export default () => {
    return (
        <Fragment>
            <Header show={'false'} />
            <Container>
                <ContentContainer>
                    <LogoWordMarkContainer>
                        <LogoWordMark to="/" />
                    </LogoWordMarkContainer>
                </ContentContainer>
            </Container>
        </Fragment>
    );
};
