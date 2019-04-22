import React from 'react';
import styled from 'styled-components';

// import list_end_icon from '../../images/page-elements/list-end-icon.svg';

import SectionLabel from '../../common/SectionLabel';

import BategoryContentCard from '../../common/BategoryContentCard';

import {
    Tabs as UnstyledTabs,
    TabList as UnstyledTabList,
    Tab as UnstyledTab,
    TabPanel as UnstyledTabPanel
} from 'react-tabs';

import { BategoriesData } from '../../../fake-data/Data';

const BategoriesContainer = styled.div`
    /* or else it jumps weirdly when switching to a tab with a short list */
    min-height: 100vh;
`;

const BategoriesNavigationTopContainer = styled.div`
    @media (max-width: 1030px) {
       /* padding: 32px 32px 0 32px; */
    }
`;

const BategoriesNavigationBackgroundContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #F2F2F2;
`;

const BategoriesNavigationOverlayContainer = styled.div`
    max-width: 984px;
    margin-left: auto;
    margin-right: auto;
`;

const BategoriesNavigationOverlay = styled.div`
    position: absolute;
    right: 0;
    height: 40px;
    width: 180px;
    margin-left: auto;
    background: linear-gradient(90deg, rgba(255,255,255,0.001), #F2F2F2);
    pointer-events: none;

    z-index: 1;
`;

// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————
// ——— TOP LEVEL TABS ———
// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————

const Tabs = styled(UnstyledTabs)`
    
`;

const TabList = styled(UnstyledTabList)`
    list-style-type: none;
    padding: 0;
    display: flex;
    margin: 0;

    overflow: auto;
    scrollbar-width: none;

    padding-bottom: 20px;
    border-bottom: 1px solid #DADADA;

    margin-bottom: 35px;

    @media (max-width: 1030px) {
       padding: 0 20px 20px 20px;
    }
`;

TabList.tabsRole = 'TabList';

const Tab = styled(UnstyledTab)`
    height: 40px;
    min-width: 100px;
    background: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    background-color: transparent;

    transition: background-color 0.2s ease-out;

    &:hover {
        cursor: pointer;
        background-color: #FFFFFF;
        transition: none;
    }

    &.is-selected {
        background: linear-gradient(270deg, #FF7A2C 0%, #FF5F80 50.51%, #CD62FF 100%);
        box-shadow: inset 0 0 6px 0 rgba(255,255,255,0.5);
        border-radius: 20px;
    }

    &.is-selected > p {
        color: #FFF;
    }

    &:focus {
        outline: none;
        /* box-shadow: 0 0 0 2px rgba(0, 0, 255, .5); */
    }
`;
Tab.tabsRole = 'Tab';

const TabText = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    font-size: 16px;
    line-height: 20px;

    text-align: center;
    color: #000;
    white-space: nowrap;
`;

const TabPanel = styled(UnstyledTabPanel)`
    width: 100%;
`;

// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————
// ——— BATEGORY CARDS ———
// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————

const BategoriesContentContainer = styled.div`
    max-width: 984px;

    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, auto);

    grid-column-gap: 40px;
    grid-row-gap: 36px;

    padding-bottom: 36px;

    @media(max-width: 1030px) {
        grid-template-columns: 1fr;
        padding: 0 20px 36px 20px;

        grid-column-gap: 20px;
        grid-row-gap: 18px;
    }
`;

const BategoriesListEndIconContainer = styled.div`
    grid-column: 1 / span 2;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 1030px) {
        grid-column: 1 / span 1;
    }
`;

const BategoriesListEndIcon = styled.div`
    background-image: url('/images/page-elements/list-end-icon.svg');
    background-size: contain;
    height: 16.5px;
    width: 18px;

    justify-self: center;
    align-self: center;
`;



export default () => {
    return (
        <BategoriesContainer>
            <BategoriesNavigationTopContainer>
                <Tabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected' >

                    {/* Loop through the top level navigation items 
                        so we can populate the "Tabs" as top-level navigation items */}
                    <BategoriesNavigationBackgroundContainer>
                        <BategoriesNavigationOverlayContainer>

                            {/* putting this inside so that I can set a background colour and make this sticky */}
                            <SectionLabel sectionName="BATegories" bategories />

                            <BategoriesNavigationOverlay />
                            <TabList>
                                {BategoriesData.map((allBategories) =>
                                    <Tab key={allBategories.bategoryName}>
                                        <TabText>
                                            {allBategories.bategoryName}
                                        </TabText>
                                    </Tab>
                                )}
                            </TabList>
                        </BategoriesNavigationOverlayContainer>
                    </BategoriesNavigationBackgroundContainer>

                    {/* Loop through the top level navigation items again,
                        but this time so we can make "panels" that match the "tabs"

                        The way react-tabs works is if you have tabs like this:
                            <Tab>1</Tab>
                            <Tab>2</Tab>
                            <Tab>3</Tab>

                        you need matching panels like this:
                            <Panel>1</Panel>
                            <Panel>2</Panel>
                            <Panel>3</Panel>

                        so we're looping through the same thing twice; once for
                        the navigation items, again for the panels */}

                    {BategoriesData.map((allBategories) =>
                        <TabPanel key={allBategories.bategoryName}>

                            {/* The actual content of [bategoryName] */}
                            {/* Loop through this bategory so we can create a panel for each tab item */}

                            {/* Now loop through this specific Sub Category's "featured content" array */}
                            <BategoriesContentContainer>
                                {allBategories.contentInBategory.map((contentInBategory) =>
                                    <BategoryContentCard
                                        key={contentInBategory.contentName}
                                        urlLink={contentInBategory.urlLink}
                                        imageLink={contentInBategory.imageLink}
                                        contentName={contentInBategory.contentName}
                                        subtitle={contentInBategory.subtitle} />
                                )}
                                <BategoriesListEndIconContainer>
                                    <BategoriesListEndIcon />
                                </BategoriesListEndIconContainer>
                            </BategoriesContentContainer>
                        </TabPanel>
                    )}
                </Tabs>
            </BategoriesNavigationTopContainer>
        </BategoriesContainer>
    )
}