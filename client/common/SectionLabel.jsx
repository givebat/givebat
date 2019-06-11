import React from 'react';
import styled from 'styled-components';

const SectionLabelContainer = styled.div`
    max-width: 984px;

    margin-left: auto;
    margin-right: auto;

    @media(max-width: 1366px) {
        margin-bottom: 32px;
    }

    @media(max-width: 1030px) {
        /* because bategories required a hacky workaround because of margins */
        padding: ${props => props.bategories ? "0 20px" : "0"};
    }

    @media(max-width: 768px) {
        margin-left: -20px;
    }
`;

const SectionLabel = styled.div`
    height: 32px;
    width: 224px;
    border-radius: 16px;
    background-color: #000000;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    /* account for an extra 4px padding on the "Featured" label (from the hacky workaround for gradient hover border) */
    margin-bottom: ${props => props.featured ? "-20px" : "-16px"};
    margin-left: -112px;

    @media(max-width: 1366px) {
        margin-left: 0;
    }

    @media(max-width: 768px) {
        border-radius: 0 16px 16px 0;
    }
`;

const SectionLabelText = styled.h2`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    font-size: 16px;
    line-height: 20px;
    color: white;

    margin-left: 16px;
`;

export default (props) => {
    return (
        <SectionLabelContainer bategories={props.bategories}>
            <SectionLabel featured={props.featured}>
                <SectionLabelText>
                    {props.sectionName}
                </SectionLabelText>
            </SectionLabel>
        </SectionLabelContainer>
    )
}