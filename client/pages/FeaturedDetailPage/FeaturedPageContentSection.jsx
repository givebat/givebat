import React from 'react';
import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';

import SkyFolkContent from './FeaturedPageContent/SkyFolkContent';
import InternetArchiveContent from './FeaturedPageContent/InternetArchiveContent';
import IndizrContent from './FeaturedPageContent/IndizrContent';
import ChangelogContent from './FeaturedPageContent/ChangelogContent';

// import FunCornerSvg from '../../images/page-elements/funcorner.svg';

const ContentSectionBackgroundWrapper = styled.div`
    padding: 0;
    margin: 0;
    /* 50% is at the (984px / 2) = 492 mark, so we need to add (718px - (984px / 2)) = 266px and 24px of padding = 290px*/
    background: linear-gradient(90deg, #fff calc(50% + 290px), #f2f2f2 50%);

    @media (max-width: 1030px) {
        padding: 0 24px;

        background: #fff;
    }
`;

const ContentSectionWrapper = styled.div`
    max-width: 984px;
    width: 100%;
    margin: 0 auto;
    min-height: calc(100vh - 464px);
`;

const ContentSectionContainer = styled.div`
    /*    This is what this grid looks like:    */
    /*                                          */
    /*    |-------------[TITLE]-------------|   */
    /*    |----(title: 718px)----|          |   */
    /*    |-------------[/TITLE]------------|   */
    /*                                          */
    /*    |------------[CONTENT]------------|   */
    /*    |----(text: 718px)-----|          |   */
    /*    |----------(image: 100%)----------|   */
    /*    |----(text: 718px)-----|          |   */
    /*    |------------[/CONTENT]-----------|   */
    /*                                          */
    /*    |------------[CREDITS]------------|   */
    /*    |----(text: 718px)-----|          |   */
    /*    |------------[/CREDITS]-----------|   */

    display: grid;
    grid-template-columns: [content-start] 718px [grey-start] auto [grey-end content-end];
    grid-template-rows: [whole-start title-start] auto [title-end body-start] auto [body-end credit-start] auto [credit-end whole-end];

    grid-column-gap: 0;
    grid-row-gap: 0;

    @media (max-width: 1030px) {
        grid-template-columns: [content-start] auto [content-end];
        grid-template-rows: [title-start] auto [title-end body-start] auto [body-end credit-start] auto [credit-end];
    }
`;

const FeaturedContentTitleAndSubtitleContainer = styled.div`
    max-width: 718px;
    padding-bottom: 64px;

    grid-column: content;
    grid-row: title;
`;

const FeaturedContentBodyContainer = styled.div`
    max-width: 984px;

    grid-column: content;
    grid-row: body;

    display: grid;
`;

const FeaturedContentTitle = styled.h1`
    display: inline-block;

    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-style: normal;

    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.6px;

    color: #ff325a;

    margin: 0;
    padding: 49px 0 0 0;
`;

const FeaturedContentSubTitle = styled.h2`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-style: normal;

    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.6px;

    color: #000;

    margin: 0;
    padding: 0;
`;

const FeaturedContentLinkButton = styled.a`
    height: 40px;
    width: 168px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

    text-decoration: none;

    &:first-child {
        align-self: start;
        justify-self: end;
        margin-bottom: -40px;
    }

    &:last-child {
        align-self: end;
        justify-self: end;
        margin-top: -40px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 1030px) {
        /* temporary solution to make button more visible on mobile */
        /* border: 2px solid #FE5677; */

        &:first-child {
            justify-self: start;
            margin-bottom: 40px;
        }

        &:last-child {
            margin-top: 40px;
        }
    }
`;

const FeaturedContentLinkButtonText = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    color: #4a4a4a;

    font-size: 16px;
    line-height: 20px;
`;

export const FeaturedContentBodyParagraph = styled.p`
    max-width: 718px;

    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;

    color: #000000;

    font-size: 18px;
    line-height: 26px;

    margin: 0;
    padding: 0 0 36px 0;

    &:last-of-type {
        padding: 0;
    }
`;

export const FeaturedContentBodyParagraphLinkText = styled.a`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    color: #4a4a4a;

    text-decoration: none;
`;

export const FeaturedContentBodyImage = styled.div`
    background-image: url(${props => props.imgSrc});
    background-position: center;
    background-size: cover;

    border-radius: 40px;

    height: 474px;
    width: 100%;

    margin-bottom: 36px;

    position: relative;

    :before {
        content: '';
        /* 202px (width of grey column) - 84px (width of SVG image) = 118px offset */
        right: 119px;
        top: 0;

        position: absolute;
        display: block;

        height: 84px;
        width: 84px;

        background-image: url('/images/page-elements/funcorner.svg');
        margin-top: -84px;
    }

    :after {
        content: '';
        right: 119px;
        bottom: 0;

        position: absolute;
        display: block;

        height: 84px;
        width: 84px;

        transform: rotate(90deg);

        background-image: url('/images/page-elements/funcorner.svg');
        margin-bottom: -84px;
    }

    @media (max-width: 1030px) {
        :before {
            display: none;
        }
        :after {
            display: none;
        }
    }
`;

const FeaturedContentCreditContainer = styled.div`
    padding-top: 36px;

    max-width: 718px;

    grid-row: credit;
    grid-column: content;
`;

const FeaturedContentBorderBox = styled.div`
    box-sizing: border-box;
    height: 2px;
    max-width: 718px;
    border: 1px solid #000000;
    opacity: 0.1;
`;

const FeaturedContentCreditTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding-top: 23px;
    padding-bottom: 97px;
`;

const FeaturedContentAuthorNameBy = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    color: #000000;

    font-size: 16px;
    line-height: 20px;

    margin: 0 24px 0 0;
    padding: 0;
`;

const FeaturedContentAuthorName = styled.p`
    display: inline;

    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    color: #fe5677;

    font-size: 16px;
    line-height: 20px;

    margin: 0;
    padding: 0;
`;

const FeaturedContentAuthorNameDate = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;

    color: #939393;

    font-size: 16px;
    line-height: 20px;
`;

export default props => {
    return (
        <>
            <ContentSectionBackgroundWrapper>
                <ContentSectionWrapper>
                    <ContentSectionContainer>
                        <FeaturedContentTitleAndSubtitleContainer>
                            <FeaturedContentTitle>
                                {props.title}
                            </FeaturedContentTitle>
                            <FeaturedContentSubTitle>
                                {props.subtitle}
                            </FeaturedContentSubTitle>
                        </FeaturedContentTitleAndSubtitleContainer>

                        <FeaturedContentBodyContainer>
                            <FeaturedContentLinkButton
                                target="_blank"
                                href={props.link}
                            >
                                <FeaturedContentLinkButtonText>
                                    Visit site
                                </FeaturedContentLinkButtonText>
                            </FeaturedContentLinkButton>

                            {/* BEGINNING OF BODY CONTENT THAT CAN BE PULLED IN THROUGH CMS */}

                            <Switch>
                                <Route
                                    path="/sky-folk"
                                    render={props => (
                                        <SkyFolkContent {...props} />
                                    )}
                                />
                                <Route
                                    path="/internet-archive"
                                    render={props => (
                                        <InternetArchiveContent {...props} />
                                    )}
                                />
                                <Route
                                    path="/indizr"
                                    render={props => (
                                        <IndizrContent {...props} />
                                    )}
                                />
                                <Route
                                    path="/changelog"
                                    render={props => (
                                        <ChangelogContent {...props} />
                                    )}
                                />
                            </Switch>

                            {/* END OF BODY CONTENT THAT CAN BE PULLED IN THROUGH CMS */}

                            <FeaturedContentLinkButton
                                target="_blank"
                                href={props.link}
                            >
                                <FeaturedContentLinkButtonText>
                                    Visit site
                                </FeaturedContentLinkButtonText>
                            </FeaturedContentLinkButton>
                        </FeaturedContentBodyContainer>

                        <FeaturedContentCreditContainer>
                            <FeaturedContentBorderBox />
                            <FeaturedContentCreditTextContainer>
                                <FeaturedContentAuthorNameBy>
                                    By{' '}
                                    <FeaturedContentAuthorName>
                                        {props.author}
                                    </FeaturedContentAuthorName>
                                </FeaturedContentAuthorNameBy>
                                <FeaturedContentAuthorNameDate>
                                    {props.date}
                                </FeaturedContentAuthorNameDate>
                            </FeaturedContentCreditTextContainer>
                        </FeaturedContentCreditContainer>
                    </ContentSectionContainer>
                </ContentSectionWrapper>
            </ContentSectionBackgroundWrapper>
        </>
    );
};
