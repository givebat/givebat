import styled from 'styled-components';
import React, { Fragment } from 'react';

import Header from '../../common/Header';
// import logoWordMarkImg from '../../images/page-elements/gb_word_homepage.png';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
    min-height: 220px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media(max-width: 768px) {
        /* min-height: 300px; */
    }
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
`;

const LogoWordMark = styled(NavLink)`
    background-image: url('/images/page-elements/gb_word_homepage.png');
    background-size: cover;
    background-position: center;

    height: 59.58px;
    width: 216.42px;
    margin-left: 15px;
    margin-bottom: 40px;

    @media(max-width: 768px) {
        margin-left: 35px;
    }
`;

export default () => {
    return (
        <Fragment>
            <Header show={"false"}>

            </Header>
            <Container>
                <ContentContainer>
                    <LogoWordMarkContainer>
                        <LogoWordMark to="/" />
                    </LogoWordMarkContainer>
                </ContentContainer>
            </Container>
        </Fragment>
    )
}