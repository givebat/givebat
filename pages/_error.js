import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../src/common/Header'

const NotFoundDiv = styled.div`
  max-width: 600px;
  padding-top: 200px;
  margin: 0 auto;
`

const NotFoundHeader = styled.h1`
  margin: 10px 45px;

  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: 900;

  color: #fe5677;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 10px 85px;
  }
`

const NotFoundText = styled.p`
  margin: 10px 45px;

  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px 85px;
  }
`

const LinkInner = styled.a`
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-size: 24px;

  text-decoration: none;
  color: #fe5677;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const title = 'givebat — 404'
const description =
	'givebat.com is a curated look at the best of the new web. We\'re shining a spotlight on the web\'s trailblazers.'

function Error({statusCode}) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description}/>

				<meta property="og:title" content={title}/>
				<meta property="og:description" content={description}/>
			</Head>

			<Header/>

			<NotFoundDiv>
				<NotFoundHeader>{statusCode}</NotFoundHeader>
				<NotFoundText>Sorry, this page doesn't exist.</NotFoundText>
				<NotFoundText>Our bad.</NotFoundText>
				<NotFoundText>
					You can go back to the home page <Link href="/">
					<LinkInner>here</LinkInner>
				</Link>.
				</NotFoundText>
			</NotFoundDiv>
		</>
	)
}

Error.getInitialProps = ({res, err}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return {statusCode}
}

export default Error