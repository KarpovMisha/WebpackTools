import React, { Component, PropTypes } from 'react';
import ReactPaginate from 'react-paginate';
import Posts from './Posts';
import { push } from 'react-router-redux';

export default class FacebookPosts extends Component {
  static propTypes = {
    prop: PropTypes.object,
    newProps: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      offset: 0,
      pageNum: 0,
      FBsdk: {},
      limit: 2,    //постов на одну страничку
      count: 6   //всего постов
    };
    this.click = this.click.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const shift = this.props.newProps.id;
      this.loadPostsFacebook(shift || null);
    }
  }

  componentWillReceiveProps(nextProps) {
    const selected = nextProps.newProps.id;
    const shift = selected * this.state.limit;
    this.loadFeedNews(shift);
  }

  loadPostsFacebook(shift) {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1824715864406732',
        xfbml: false,
        version: 'v2.8'
      });
      this.setState({ FBsdk: FB });
      this.loadFeedNews(shift);
      this.loadNewsOnePage();
    };

    ((d, s, id) => {
      let js = d.getElementsByTagName(s)[0];
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk/debug.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  loadNewsOnePage() {
    const FB = this.state.FBsdk;
    FB.api(
      'manybeautifulnails/posts?fields=message,picture',
      {
        access_token: '1824715864406732|Jv4js3dY0kP2XvC8-0O8p91Nm2E',
        limit: this.state.count
      },
      ({ data }) => {
        const page = data.length / this.state.limit;
        this.setState({ pageNum: page });
      }
    );
  }

  loadFeedNews(shift) {
    const FB = this.state.FBsdk;
    FB.api(
      'manybeautifulnails/posts?fields=message,picture',
      {
        access_token: '1824715864406732|Jv4js3dY0kP2XvC8-0O8p91Nm2E',
        limit: this.state.limit,
        offset: shift
      },

      ({ data }) => {
        this.setState({ posts: data });
      }
    );
  }

  click({ selected }) {
    this.context.router.push(`/facebook/${selected}`);
  }

  render() {
    const { posts, pageNum } = this.state;
    return (
      <div className="row">
        <Posts
          posts={posts}
        />
        <ReactPaginate
          pageNum={pageNum}
          containerClassName="pagination"
          clickCallback={this.click}
          activeClassName="active"
        />
      </div>
    );
  }
}

FacebookPosts.contextTypes = {
  router: PropTypes.object.isRequired
};
