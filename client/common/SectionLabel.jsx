import React from 'react';
import styled from 'styled-components';

const SectionLabel = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-style: normal;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: 4.29px;
    color: #ff325a;

    text-decoration: none;
    padding-bottom: 16px;
    margin: 0;
`;

const SectionLabelContainer = styled.div`
    max-width: 984px;
    margin-left: auto;
    margin-right: auto;
`;

export default props => {
    return (
        <SectionLabelContainer>
            <SectionLabel>{props.sectionName}</SectionLabel>
        </SectionLabelContainer>
    );
};
