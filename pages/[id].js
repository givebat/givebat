import React, { Component } from 'react';
import { withRouter } from 'next/router';
import FeaturedDetailPage from '../src/components/FeaturedDetailPage';
import axios from 'axios';
import ErrorPage from './_error.js';

class Index extends Component {
  state = {
    res: null,
  };

  componentDidMount() {
    axios.get('/imitationBackend.json').then(res => {
      this.setState({
        res: res.data,
      });
    });
  }

  render() {
    const { res } = this.state;
    if (!res) return null;
    const currentUrl = this.props.router.query.id;

    console.log(res[currentUrl]);

    if (res[currentUrl] === undefined) {
      return <ErrorPage statusCode={404} />;
    }

    const infoFromCms = res && res[currentUrl];

    const allProps = { ...{ current: currentUrl }, ...infoFromCms };

    return <FeaturedDetailPage {...allProps} />;
  }
}

export default withRouter(Index);
