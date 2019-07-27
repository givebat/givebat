import React from 'react';

import BategoryContentCard from '../../../common/BategoryContentCard';

// import TNthedailybat from '../../../images/thumbnails/thedailybat.jpg';
// import TNbatgrowth from '../../../images/thumbnails/batgrowth.com.jpg';

// import TNCheddar from '../../../images/thumbnails/cheddar.com.jpg';
// import TNqwant from '../../../images/thumbnails/qwant.com.jpg';
// import TNduckduckgo from '../../../images/thumbnails/duckduckgo.com.jpg';
// import TNuphold from '../../../images/thumbnails/uphold.com.jpg';

// import TNBartBaker from '../../../images/thumbnails/BartBaker.jpg';
// import TNPhilipDeFranco from '../../../images/thumbnails/PhilipDeFranco.jpg';

import {
  CollectionBodyParagraph,
  CollectionBodyParagraphBoldSpan,
  CollectionCardContainer,
} from '../CollectionPageContentSection';

export default () => {
  return (
    <>
      <CollectionBodyParagraph>
        Brave is blazing a bold new path toward the future of the web.
      </CollectionBodyParagraph>
      <CollectionBodyParagraph>
        It’s going to take a lot of work to get there though. We’d like to
        highlight a few creators, websites, and organizations who are working to
        advance Brave’s vision.
      </CollectionBodyParagraph>
      <CollectionBodyParagraph>
        First up are some projects that were an inspiration
        for <CollectionBodyParagraphBoldSpan>givebat</CollectionBodyParagraphBoldSpan> itself.
        These are some fantastic places to see all the cool new sites and
        creators adopting Brave Rewards. You’ll see both of these projects’
        creators hanging around in the Telegram chat and on the official
        r/BATproject subreddit.
      </CollectionBodyParagraph>

      <CollectionCardContainer>
        <BategoryContentCard
          contentName="The Daily Bat"
          urlLink="https://www.youtube.com/channel/UCtGMhfrxfHr90Xqw2RdmJgw"
          subtitle="Daily highlights of great Brave verified creators"
          imageLink={'/images/thumbnails/thedailybat.jpg'}/>
        <BategoryContentCard
          contentName="BATgrowth"
          urlLink="https://batgrowth.com/"
          subtitle="Watch the adoption of Brave and BAT happen"
          imageLink={'/images/thumbnails/batgrowth.com.jpg'}/>
      </CollectionCardContainer>

      <CollectionBodyParagraph>
        Brave’s ambitions are big, and they can’t fix the web by themselves.
      </CollectionBodyParagraph>
      <CollectionBodyParagraph>
        A few awesome companies and websites have already partnered with Brave
        to help bring a better web to life. Here are a few of them.
      </CollectionBodyParagraph>

      <CollectionCardContainer>
        <BategoryContentCard
          contentName="Cheddar"
          urlLink="https://cheddar.com"
          subtitle="The latest in business and tech news"
          imageLink={'/images/thumbnails/cheddar.com.jpg'}/>
        <BategoryContentCard
          contentName="Qwant"
          urlLink="https://qwant.com"
          subtitle="A search engine that protects your privacy"
          imageLink={'/images/thumbnails/qwant.com.jpg'}/>
        <BategoryContentCard
          contentName="DuckDuckGo"
          urlLink="https://duckduckgo.com"
          subtitle="A search engine that doesn't track you"
          imageLink={'/images/thumbnails/duckduckgo.com.jpg'}/>
        <BategoryContentCard
          contentName="Uphold"
          urlLink="https://uphold.com/"
          subtitle="Buy and sell digital currencies easily"
          imageLink={'/images/thumbnails/uphold.com.jpg'}/>
      </CollectionCardContainer>

      <CollectionBodyParagraph>
        If we want to help Brave fix the web, content creators are an important
        piece of the puzzle. A few big creators are already verified with Brave
        Rewards. Bart Baker and Philip DeFranco are two very successful
        YouTubers (10 million subscribers and 6.3 million subscribers
        respectively) who are Brave Rewards-verified.
      </CollectionBodyParagraph>
      <CollectionBodyParagraph>
        If you spend time in the official BAT Telegram chat, you’ll even see
        Bart Baker participating in conversations every now and then.
      </CollectionBodyParagraph>

      <CollectionCardContainer>
        <BategoryContentCard
          contentName="Bart Baker"
          urlLink="https://www.youtube.com/BartBaKer"
          subtitle="High-quality song parodies with over 3 billion total views"
          imageLink={'/images/thumbnails/BartBaker.jpg'}/>
        <BategoryContentCard
          contentName="The Philip DeFranco Show"
          urlLink="https://www.youtube.com/channel/UClFSU9_bUb4Rc6OYfTt5SPw"
          subtitle="Daily news summaries with over 6 million subscribers"
          imageLink={'/images/thumbnails/PhilipDeFranco.jpg'}/>
      </CollectionCardContainer>

      <CollectionBodyParagraph>
        All of these creators and companies are supporting this exciting new way
        of funding content online. Check them out, and send them some BAT to
        show them that they made a great choice in signing up for Brave Rewards!
      </CollectionBodyParagraph>
    </>
  );
}