import React, { Component } from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { fetchRedirectionData } from '../../redux/redirectionAction';

class ShortUrlPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slug: props.router.query.slug,
      redirectData: null,
      error: null
    }
  }

  componentDidMount () {
    const { slug } = this.props.router.query;
    this.props.fetchRedirectionData(slug);
  }

  render () {
    const { redirectData, slug, error } = this.props.redirectionData;
    if (typeof window !== undefined) {
      if (redirectData && redirectData.data && redirectData.data.toUrl) {
        window.location.href = redirectData.data.toUrl;
      }
      if (!slug || error) {
        return <div>Wrong Url</div>
      }
      return <div>Redirecting...</div>
    }
    return <div>Redirecting...</div>
  }
}

const mapStateToProps = (redirectionData) => ({
  redirectionData
})

export default connect(mapStateToProps, {
  fetchRedirectionData
})(withRouter(ShortUrlPage));