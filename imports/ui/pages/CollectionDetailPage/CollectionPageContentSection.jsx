import React from 'react';
import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';

// import FunCornerGreySvg from '../../images/page-elements/funcornergrey.svg';

import CollectionLabel from '../../common/CollectionLabel';

import FriendsOfBraveContent from './CollectionPageContent/FriendsOfBraveContent';

const ContentSectionBackgroundWrapper = styled.div`
    padding: 0;
    margin: 0;
    /* 50% is at the (984px / 2) = 492 mark, so we need to add (718px - (984px / 2)) = 266px and 24px of padding = 290px*/
    background: linear-gradient(90deg, #FFF calc(50% + 290px), #F2F2F2 50%);

    @media(max-width: 1030px) {
        padding: 0 24px;

        background: #FFF;
    };
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

    @media(max-width: 1030px) {
        grid-template-columns: [content-start] auto [content-end];
        grid-template-rows: [title-start] auto [title-end body-start] auto [body-end credit-start] auto [credit-end];
    }
`;

const CollectionTitleContainer = styled.div`
    max-width: 718px;
    padding-bottom: 64px;

    grid-column: content;
    grid-row: title;

    padding: 48px 0 64px 0;
`;

const CollectionTitle = styled.h1`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-style: normal;

    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.6px;

    color: #000;

    margin: 0;
`;

const CollectionBodyContainer = styled.div`
    max-width: 984px;

    grid-column: content;
    grid-row: body;

    display: grid;

`;

export const CollectionBodyParagraph = styled.p`
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

export const CollectionBodyParagraphBoldSpan = styled.span`
    font-weight: 800;
`;

export const CollectionCardContainer = styled.div`
    max-width: 984px;
    border-radius: 60px 0 0 60px;
    background-color: #F2F2F2;

    margin-bottom: 36px;

    position: relative;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, auto);

    grid-column-gap: 20px;
    grid-row-gap: 20px;

    padding: 20px;

    :before {
        content: "";
        /* 202px (width of grey column) - 84px (width of SVG image) = 118px offset */
        right: 202px;
        top: 0;

        position: absolute;
        display: block;

        height: 84px;
        width: 84px;

        transform: rotate(90deg);

        background-image: url('/images/page-elements/funcornergrey.svg');
        margin-top: -84px;
    }

    :after {
        content: "";
        right: 202px;
        bottom: 0;

        position: absolute;
        display: block;

        height: 84px;
        width: 84px;

        background-image: url('/images/page-elements/funcornergrey.svg');
        margin-bottom: -84px;
    }

    @media(max-width: 1030px) {

        margin-right: -24px;

        grid-template-columns: minmax(auto, 472px);

        :before {
            right: 0;
        }
        :after {
            right: 0;
        }
    }
`;

const CollectionCreditContainer = styled.div`
    padding-top: 36px;

    max-width: 718px;

    grid-row: credit;
    grid-column: content;
`;

const CollectionBorderBox = styled.div`
    box-sizing: border-box;
    height: 2px;
    max-width: 718px;
    border: 1px solid #000000;
    opacity: 0.1;
`;

const CollectionCreditTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding-top: 23px;
    padding-bottom: 97px;
`;

const CollectionAuthorNameBy = styled.p`
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

const CollectionAuthorName = styled.p`
    display: inline;

    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    color: #FE5677;

    font-size: 16px;
    line-height: 20px;

    margin: 0;
    padding: 0;
`;

const CollectionAuthorNameDate = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;

    color: #939393;

    font-size: 16px;
    line-height: 20px;
`;

export default (props) => {
    return (
        <>
            <ContentSectionBackgroundWrapper>
                <ContentSectionWrapper>
                    <ContentSectionContainer>
                        <CollectionTitleContainer>
                            <CollectionLabel labelName="COLLECTION" />
                            <CollectionTitle>{props.title}</CollectionTitle>
                        </CollectionTitleContainer>

                        <CollectionBodyContainer>

                            <Switch>
                                <Route path="/friends-of-brave"
                                    render={props => <FriendsOfBraveContent {...props} />} />
                            </Switch>

                        </CollectionBodyContainer>

                        <CollectionCreditContainer>
                            <CollectionBorderBox />
                            <CollectionCreditTextContainer>
                                <CollectionAuthorNameBy>
                                    By <CollectionAuthorName>{props.author}</CollectionAuthorName>
                                </CollectionAuthorNameBy>
                                <CollectionAuthorNameDate>{props.date}</CollectionAuthorNameDate>
                            </CollectionCreditTextContainer>
                        </CollectionCreditContainer>

                    </ContentSectionContainer>
                </ContentSectionWrapper>
            </ContentSectionBackgroundWrapper>
        </>
    )
}