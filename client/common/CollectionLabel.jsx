import React from 'react';
import styled from 'styled-components';

const CollectionLabel = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-style: normal;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: 4.29px;
    color: #FF325A;

    text-decoration: none;
    padding: 0;
    margin: 0;
`;

export default (props) => {
    return (
        <CollectionLabel>
            {props.labelName}
        </CollectionLabel>
    )
}