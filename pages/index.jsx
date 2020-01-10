import React from 'react'
import Head from 'next/head'
import HomePage from '../src/index'

const title = 'givebat.com'
const description =
	'givebat.com is a place to find the greatest Brave Creators'
const ogImage = 'https://www.givebat.com/og-image.jpg'

const Index = () => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description}/>

			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content={ogImage}/>
			<meta property="og:site_name" content={title}/>

			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:site" content="@givebat"/>
			<meta name="twitter:title" content={title}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:creator" content="@givebat"/>
			<meta name="twitter:image" content={ogImage}/>
		</Head>

		<HomePage/>
	</>
)

export default Index