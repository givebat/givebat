import React from 'react';
import styled from 'styled-components';

import CollectionLabel from '../../common/CollectionLabel';
import BategoryContentCard from '../../common/BategoryContentCard';

// import bottom_corner_image from '../../images/about/givebat_emerging@2x.png';

// import bat_org from '../../images/about/bat.org.jpg';
// import bat_whitepaper from '../../images/about/bat_whitepaper.jpg';
// import bat_reddit from '../../images/about/bat_project_reddit.jpg';
// import brave from '../../images/about/brave.com.jpg';
// import article from '../../images/about/hackernoon_article.jpg';

// import team_member_photo_daniel from '../../images/about/daniel.jpg';
// import team_member_photo_evan from '../../images/about/evan.jpeg';
// import team_member_photo_felix from '../../images/about/felix.jpeg';

// import twitter_button_content from '../../images/about/twitter@2x.png';

const ContentSectionBackground = styled.div`
    padding: 0;
    margin: 0;

    min-height: calc(100vh - 400px);

    background-color: #FFFFFF;
`;

const ContentSectionContainer = styled.div`
    max-width: 984px;
    width: 100%;
    margin: 0 auto;
`;

const AboutTitleContainer = styled.div`
    /* 16px on bottom because 64 (design) - 48 (top of header padding) */
    padding: 48px 0 16px 0;
    max-width: 718px;
    @media(max-width: 1030px) {
        padding: 48px 24px 16px 24px;
    }
`;

const AboutTitleText = styled.h1`
    display: inline-block;

    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-style: normal;

    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.6px;

    color: #939393;

    margin: 0;
    padding: 14px 0 0 0;

    background: -webkit-linear-gradient(360deg, #FF7A2C 0%, #FF5F80 50.51%, #CD62FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::selection {
        -webkit-text-fill-color: #FFFFFF;
    }
`;

const AboutSubtitleText = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-style: normal;

    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.6px;

    color: #000000;

    margin: 0;
    padding: 0;
`;

const AboutSection = styled.div`
    max-width: 718px;
    padding-top: 48px;

    display: grid;

    @media(max-width: 1030px) {
        padding: 48px 24px 0 24px;
    }
`;

const AboutHeader = styled.h2`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    font-size: 28px;
    line-height: 35px;

    margin: 0;
    padding: 0 0 24px 0;
`;

const AboutBodyParagraph = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;

    font-size: 18px;
    line-height: 26px;

    color: #000000;

    margin: 0;
    padding: 0 0 32px 0;

    &:last-child {
        padding-bottom: 0;
    }
`;

const AboutBodyBoldSpan = styled.span`
    font-weight: 900;
`;

const AboutLinksContainerWrapper = styled.div`
    padding: 0;
    margin: 36px 0 0 0;

    background-color: #F2F2F2;
`;

const AboutLinksContainer = styled.div`
    max-width: 984px;

    margin: 0 auto;

    padding: 16px 0;

    display: grid;
    grid-template-columns: minmax(auto, 472px) minmax(auto, 472px);
    grid-auto-rows: minmax(min-content, auto);
    
    /* minus 8 on rows because of vertical padding on wrappers */
    grid-row-gap: 10px;
    grid-column-gap: 20px;

    @media(max-width: 1030px) {
        grid-template-columns: 1fr;
        padding: 16px 24px 16px 24px;
    }
`;

const AboutTeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 174px));
    grid-template-rows: auto;
    grid-column-gap: 48px;

    @media(max-width: 738px) {
        grid-template-columns: minmax(auto, 174px);

        justify-self: center;
    }
`;

const AboutTeamMemberContainer = styled.a`
    align-self: start;
    justify-self: stretch;

    margin-top: 10px;

    text-decoration: none;


    :hover > img {
        transform: scale(1.02);
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
    }
`;

const AboutTeamMemberPhoto = styled.img.attrs(
  props => ({src: props.imgSrc}))
  `
    height: 180px;
    width: 100%;

    border-radius: 34px;

    transition: transform 0.15s ease-out;
`;

const AboutTeamMemberInfoContainer = styled.div`
    padding: 12px 8px 31px 8px;
`;

const AboutTeamMemberName = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    font-size: 18px;
    line-height: 23px;

    color: #000000;

    padding: 0;
    margin: 0;
`;

const AboutTeamMemberRole = styled.p`
    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    font-size: 18px;
    line-height: 23px;

    color: #939393;

    padding: 0;
    margin: 4px 0 0 0;
`;

const AboutSocialLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 400px) {
        flex-direction: column;
    }
`;

const AboutGetInTouchEmailButton = styled.a`
    height: 40px;
    width: 148px;
    border-radius: 10px;
    background-color: #000000;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);

    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-right: 16px;

    :hover {
        box-shadow: 0 4px 6px 0 rgba(0,0,0,0.1);
    };

    @media(max-width: 400px) {
        margin: 0 0 16px 0;
    }
`;

const AboutGetInTouchEmailButtonText = styled.p`
    display: block;
    text-align: center;

    font-display: auto;
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-style: normal;

    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;

    text-decoration: none;

    margin: 0;
    padding: 0;
    width: 100%;
`;

const AboutTwitterButton = styled.a`
    height: 40px;
    width: 148px;
    border-radius: 10px;
    background-color: #1Da1F2;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);

    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-right: 16px;

    :hover {
        box-shadow: 0 4px 6px 0 rgba(0,0,0,0.1);
    };

    @media(max-width: 400px) {
        margin: 0 0 16px 0;
    }
`;

const AboutTwitterText = styled.img.attrs(
  props => ({src: props.imgSrc}),
)`
    width: 85px;
`;

const AboutPageBottomImage = styled.div`
    background-image: url(${props => props.imgSrc});
    background-position: right bottom;
    background-size: contain;
    background-repeat: no-repeat;

    width: 100%;
    height: 265px;

    @media(max-width: 1030px) {
        margin-top: 25px;
    }
`;

export default () => {
  return (
    <>
      <ContentSectionBackground>
        <ContentSectionContainer>
          <AboutTitleContainer>
            <CollectionLabel labelName="ABOUT"/>
            <AboutTitleText>
              The best of the new web
            </AboutTitleText>
            <AboutSubtitleText>
              Shining a spotlight on the web's bravest
            </AboutSubtitleText>
          </AboutTitleContainer>

          <AboutSection>
            <AboutHeader>Our mission</AboutHeader>
            <AboutBodyParagraph>
              Brave is on a mission to save the web. We want to help.
            </AboutBodyParagraph>
            <AboutBodyParagraph>
              Some creators and publishers are already on board. We're finding
              the best ones and sharing them with you.
            </AboutBodyParagraph>
          </AboutSection>
          <AboutSection>
            <AboutHeader>What’s Brave? What’s BAT?</AboutHeader>
            <AboutBodyParagraph>
              Brave is a new browser that protects and respects you, and BAT is
              a new way to fund content online.
            </AboutBodyParagraph>
            <AboutBodyParagraph>
              If you’ve ever had a website load slowly on your phone, had an
              annoying ad pop up in the middle of what you’re looking at, or
              been asked to sign up for a monthly subscription just to read a
              single article, then you understand how broken the web is today.
            </AboutBodyParagraph>
            <AboutBodyParagraph>
              BAT will allow creators and publishers to make more money,
              advertisers to get better value for their money, and all internet
              users to get rewarded for their attention without having to give
              up their privacy. Everyone wins.
            </AboutBodyParagraph>
            <AboutBodyParagraph>
              The people behind Brave and BAT are rockstars: pioneers of the
              web, leading voices on privacy regulation, extremely accomplished
              researchers, ad tech gurus, marketing masters, security and
              privacy trailblazers, and world-class engineers.
            </AboutBodyParagraph>
            <AboutBodyParagraph>
              If you want to learn more about how the system works or why you
              should use Brave as your browser, here are some helpful links:
            </AboutBodyParagraph>
          </AboutSection>

        </ContentSectionContainer>

        <AboutLinksContainerWrapper>
          <AboutLinksContainer>
            <BategoryContentCard
              urlLink={'https://brave.com'}
              imageLink={'/images/about/brave.com.jpg'}
              contentName={'brave.com'}
              subtitle={'Brave\'s official website'}/>
            <BategoryContentCard
              urlLink={'https://basicattentiontoken.org'}
              imageLink={'/images/about/bat.org.jpg'}
              contentName={'bat.org'}
              subtitle={'The official Basic Attention Token website'}/>
            <BategoryContentCard
              urlLink={'https://basicattentiontoken.org/BasicAttentionTokenWhitePaper-4.pdf'}
              imageLink={'/images/about/bat_whitepaper.jpg'}
              contentName={'BAT whitepaper'}
              subtitle={'All the details of the Basic Attention Token system'}/>
            <BategoryContentCard
              urlLink={'https://www.reddit.com/r/BATProject/comments/7cr7yc/new_to_bat_read_this_introduction_to_basic/'}
              imageLink={'/images/about/bat_project_reddit.jpg'}
              contentName={'Brave and BAT overview'}
              subtitle={'The comprehensive introduction post on r/BATproject'}/>
            <BategoryContentCard
              urlLink={'https://medium.com/forwardtick/the-attention-revolution-your-next-browser-will-pay-you-b8b12399c3f7?gi=1473a449970c'}
              imageLink={'/images/about/hackernoon_article.jpg'}
              contentName={'Still using Chrome? Your next browser will pay you.'}
              subtitle={'Medium article about Brave and BAT'}/>
          </AboutLinksContainer>
        </AboutLinksContainerWrapper>

        <ContentSectionContainer>
          <AboutSection>
            <AboutHeader>What's givebat? Who are you?</AboutHeader>
            <AboutBodyParagraph>
              <AboutBodyBoldSpan>givebat</AboutBodyBoldSpan> is a curated
              directory of the best content creators who are leading the
              movement toward a better web.
            </AboutBodyParagraph>
            <AboutBodyParagraph>
              We’re a small team who’s passionate about the better web that
              Brave is making possible.
            </AboutBodyParagraph>
            <AboutTeamContainer>
              {/* Daniel */}
              <AboutTeamMemberContainer target="_blank"
                                        href="https://danielcolinjames.com">
                <AboutTeamMemberPhoto imgSrc={'/images/about/daniel.jpg'}/>

                <AboutTeamMemberInfoContainer>
                  <AboutTeamMemberName>
                    Daniel James
                  </AboutTeamMemberName>
                  <AboutTeamMemberRole>
                    Product manager
                  </AboutTeamMemberRole>
                  <AboutTeamMemberRole>
                    Frontend
                  </AboutTeamMemberRole>
                </AboutTeamMemberInfoContainer>
              </AboutTeamMemberContainer>

              {/* Evan */}
              <AboutTeamMemberContainer target="_blank"
                                        href="http://evanfeng.me">
                <AboutTeamMemberPhoto imgSrc={'/images/about/evan.jpeg'}/>

                <AboutTeamMemberInfoContainer>
                  <AboutTeamMemberName>
                    Evan Feng
                  </AboutTeamMemberName>
                  <AboutTeamMemberRole>
                    UI / UX
                  </AboutTeamMemberRole>
                </AboutTeamMemberInfoContainer>
              </AboutTeamMemberContainer>

              {/* Shujun */}
              <AboutTeamMemberContainer target="_blank"
                                        href="https://www.linkedin.com/in/shujun-bian-1b01b594/">
                <AboutTeamMemberPhoto imgSrc={'/images/about/shujun.jpeg'}/>

                <AboutTeamMemberInfoContainer>
                  <AboutTeamMemberName>
                    Shujun Bian
                  </AboutTeamMemberName>
                  <AboutTeamMemberRole>
                    Backend
                  </AboutTeamMemberRole>
                </AboutTeamMemberInfoContainer>
              </AboutTeamMemberContainer>

              {/* Felix */}
              <AboutTeamMemberContainer target="_blank"
                                        href="https://www.linkedin.com/in/felix-h-b38ab9122/">
                <AboutTeamMemberPhoto imgSrc={'/images/about/felix.jpeg'}/>

                <AboutTeamMemberInfoContainer>
                  <AboutTeamMemberName>
                    Felix Han
                  </AboutTeamMemberName>
                  <AboutTeamMemberRole>
                    Backend
                  </AboutTeamMemberRole>
                </AboutTeamMemberInfoContainer>
              </AboutTeamMemberContainer>
            </AboutTeamContainer>
          </AboutSection>

          <AboutSection>
            <AboutHeader>Get in touch with givebat</AboutHeader>
            <AboutBodyParagraph>
              Feature requests, suggestions, criticisms? We’d love to hear from
              you!
            </AboutBodyParagraph>

            <AboutSocialLinksContainer>

              <AboutTwitterButton target="_blank"
                                  href="https://twitter.com/givebat">
                <AboutTwitterText imgSrc={'/images/about/twitter@2x.png'}/>
              </AboutTwitterButton>

              <AboutGetInTouchEmailButton href="mailto:hey@givebat.com">
                <AboutGetInTouchEmailButtonText>
                  Email
                </AboutGetInTouchEmailButtonText>
              </AboutGetInTouchEmailButton>

            </AboutSocialLinksContainer>

          </AboutSection>
        </ContentSectionContainer>

      </ContentSectionBackground>
      <AboutPageBottomImage imgSrc='/images/about/givebat_emerging@2x.png'/>
    </>
  );
}