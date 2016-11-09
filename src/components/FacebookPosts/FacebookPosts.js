import React, { Component } from 'react';
import {} from 'stylesheets/main.scss';
import ReactPaginate from 'react-paginate';
import config from 'config';
import Posts from './Posts';

export default class FacebookPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      offset: 0,
      pageNum: 0,
      limit: 3,    //постов на одну страничку
      count: 12   //всего постов
    };
    this.click = this.click.bind(this);
  }

  loadPostsFacebook() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1824715864406732',
        xfbml: false,
        version: 'v2.8'
      });
      this.loadFeedNews(FB);
      this.loadNewsOnePage(FB);
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk/debug.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  loadFeedNews(FB, offset) {
    FB.api(
      config.urlFB,
      {
        "access_token": config.tokenFacebook,
        limit: this.state.limit,
        offset: offset
      },

      ({data}) => {
        this.setState({posts: data});
      }
    );
  }

  loadNewsOnePage(FB) {
    FB.api(
      config.urlFB,
      {
        "access_token": config.tokenFacebook,
        limit:  this.state.count
      },
      ({data}) => {
        const page = data.length/this.state.limit;
        this.setState({pageNum:page});
      }
    );
  }

  click({selected}) {
    let offset = selected * this.state.limit;
    this.loadFeedNews(FB, offset);
  }

  componentWillMount(){
    this.loadPostsFacebook();
  }

  render() {
    const {posts, pageNum} = this.state;
    return (
      <div className="row">
        <h1>1234asd</h1>
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
