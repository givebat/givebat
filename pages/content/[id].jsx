import React, { Component } from 'react'
import { withRouter } from 'next/router'
import FeaturedDetailPage from '../../src/components/FeaturedDetailPage'
import axios from 'axios'

class Index extends Component {
	state = {
		res: null
	}

	componentDidMount() {
		axios.get('/imitationBackend.json').then((res) => {
			this.setState({
				res: res.data
			})
		})
	}

	render() {
		const { res } = this.state
		if (!res) return null
		const currentUrl = this.props.router.query.id
		const infoFromCms = res && res[currentUrl]

		const allProps = {...{ current: currentUrl }, ...infoFromCms}

		return (<FeaturedDetailPage {...allProps} />)
	}

}

export default withRouter(Index)