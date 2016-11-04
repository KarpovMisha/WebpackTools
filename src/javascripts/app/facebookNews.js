import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';
import ReactPaginate from 'react-paginate';
import config from './config';
import Photo from './photo';
import Posts from './posts';

export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          posts: [],
          offset: 0,
          pageNum: 0,
          limit: 3,    //постов на одну страничку
          count: 15   //всего постов
      };
      this.handlePageClick = this.handlePageClick.bind(this);
  }

  facebook() {
      window.fbAsyncInit = () => {
          FB.init({
            appId: '1824715864406732',
            xfbml: false,
            version: 'v2.8'
          });
          this.feedNews(FB);
          this.newsOnePage(FB);
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

  feedNews(FB) {
      FB.api(
          config.url,
          {
            "access_token": config.token,
            limit: this.state.limit,
            offset: this.state.offset
          },
          ({data}) => {
            this.setState({posts: data});
          }
      );
  }

  newsOnePage(FB) {
    FB.api(
        config.url,
        {
          "access_token": config.token,
          limit:  this.state.count
        },

        ({data}) => {
          const page = data.length/this.state.limit;
          this.setState({pageNum:page});
        }
    );
  }

  handlePageClick({selected}) {
    this.setState({offset: (selected) * this.state.limit});
    this.feedNews(FB);
  }

  componentWillMount(){
      this.facebook();
  }

  render() {
    const {posts, pageNum} = this.state;
    return (
      <div className="row">

        <Posts posts={posts} />

        <ReactPaginate
            pageNum={pageNum}
            containerClassName="pagination"
            clickCallback={this.handlePageClick}
            activeClassName="active"
          />

      </div>
    );
  }
}


