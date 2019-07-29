import React from 'react';
import styled from 'styled-components';

// import visit_icon from '../images/page-elements/icon_new_window.svg';

const BategoriesVisitLabelContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
  align-items: start;
  padding: 0 0 24px 24px;
  margin: 0;

  align-self: end;
  justify-self: start;
`;

const BategoriesVisitLabel = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 16px;
  line-height: 20px;
  color: #ff325a;

  opacity: 0;
  margin: 0;
  padding: 0;
  transition: opacity 200ms ease-out;

  @media (hover: none) {
    /* looks weird when they all say "Visit" */
    /* opacity: 1; */
  }
`;

const BategoriesVisitLabelIcon = styled.div`
  align-self: center;
  background-image: url('/images/page-elements/icon_new_window.svg');
  height: 14px;
  width: 13.66px;

  margin: 0 0 0 10px;
  padding: 0;

  opacity: 0;
  transition: opacity 200ms ease-out;
`;

const BategoryCardContainerWrapper = styled.div`
  padding: 4px;

  min-height: 180px;

  max-width: 472px;

  width: 100%;

  align-self: center;
  justify-self: center;

  border-radius: 52px;

  &:hover {
    background-color: #ff325a;
    box-shadow: 0 6px 12px 0 rgba(255, 50, 90, 0.2);
  }

  &:hover ${BategoriesVisitLabel} {
    opacity: 1;
  }

  &:hover ${BategoriesVisitLabelIcon} {
    opacity: 1;
  }

  @media (hover: none) {
    /* on devices that do not have a pointer, don't have hover effects */
    :hover {
      /* leaving it for now because it actually looks kind of nice when you tap through to another site and then come back */
      /* background: none; */
    }
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const BategoryCardContainer = styled.a`
  width: 100%;
  height: 100%;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 12px 16px 0 rgba(0, 0, 0, 0.06);

  text-decoration: none;

  align-self: center;
  justify-self: start;

  transition: border 150ms ease-in;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(148px, auto) 1fr;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const BategoriesCardImage = styled.div`
  border-radius: 34px;
  min-height: 148px;

  min-width: 148px;
  width: 148px;

  align-self: stretch;
  justify-self: start;

  margin: 16px 0 16px 16px;
  background-image: url(${props => props.imgSrcName});
  background-size: cover;
  background-position: center;
`;

const BategoriesCardTextContainer = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 48px;

  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;

  align-self: start;
  justify-self: start;
`;

const BategoriesCardTextContentContainer = styled.div`
  justify-self: start;
  width: 100%;

  border-radius: 48px;
`;

const BategoriesCardTextTitle = styled.h3`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 18px;
  line-height: 23px;

  color: #9b9b9b;

  text-decoration: none;
  padding: 24px 24px 4px 24px;
  margin: 0;

  border-radius: 48px;

  @media (max-width: 768px) {
    hyphens: auto;
  }
`;

const BategoriesCardTextBody = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 18px;
  line-height: 23px;

  color: #000;

  text-decoration: none;
  padding: 0 24px 4px 24px;
  margin: 0;

  @media (max-width: 768px) {
    hyphens: auto;
  }
`;

export default props => {
  return (
    <BategoryCardContainerWrapper key={props.contentName}>
      <BategoryCardContainer target="_blank" href={props.urlLink}>
        <BategoriesCardImage imgSrcName={props.imageLink} />

        <BategoriesCardTextContainer>
          <BategoriesCardTextContentContainer>
            <BategoriesCardTextTitle>
              {props.contentName}
            </BategoriesCardTextTitle>
            <BategoriesCardTextBody>{props.subtitle}</BategoriesCardTextBody>
          </BategoriesCardTextContentContainer>
          <BategoriesVisitLabelContainer>
            <BategoriesVisitLabel>Visit</BategoriesVisitLabel>

            <BategoriesVisitLabelIcon />
          </BategoriesVisitLabelContainer>
        </BategoriesCardTextContainer>
      </BategoryCardContainer>
    </BategoryCardContainerWrapper>
  );
};
