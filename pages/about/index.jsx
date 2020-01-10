import React from 'react'
import Head from 'next/head'
import HeaderSection from '../../src/components/AboutPage/AboutPageHeaderSection'
import ContentSection from '../../src/components/AboutPage/AboutPageContentSection'

const title = 'givebat — about';
const description =
	"givebat.com is a curated look at the best of the new web. We're shining a spotlight on the web's trailblazers.";

const About = () => (
	<div>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
		</Head>
		<HeaderSection />
		<ContentSection />
	</div>
);

export default About;