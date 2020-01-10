import React from 'react'
import CollectionDetailPage from '../../src/components/CollectionDetailPage'

const Index = props => {
	const customs = {
		title: 'Friends of Brave',
		heroImage: '/images/collections/hero_friends_of_brave.jpg',
		author: 'Daniel James',
		date: 'March 6th, 2019'
	}
	const allProps = {...props, ...customs}

	return (<CollectionDetailPage {...allProps} />)
}

export default Index