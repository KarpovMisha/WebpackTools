import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';
import ReactPaginate from 'react-paginate';

class Photo extends Component {
    render() {
        return (
            <div className="photo">
                <img src={this.props.img}/>
                <div className="desc">{this.props.desc}</div>
            </div>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            offset: 0,
            pageNum: 0,
            limit:5,    //постов на одну страничку
            count: 15   //всего постов
        };
    }

    facebook() {
        const app = this;
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1824715864406732',
                xfbml: false,
                version: 'v2.8'
            });
            app.feedNews(FB);
            app.newsOnePage(FB);
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
        const app = this;
        FB.api(
            'talkpr/posts?fields=message,picture',
            {
                "access_token": "1824715864406732|Jv4js3dY0kP2XvC8-0O8p91Nm2E",
                limit: this.state.limit,
                offset: this.state.offset
            },
            ({data}) => {
                app.setState({posts: data});
            }
        );
    }

    newsOnePage(FB){
        const app = this;
        FB.api(
            'talkpr/posts?fields=message,picture',
            {
                "access_token": "1824715864406732|Jv4js3dY0kP2XvC8-0O8p91Nm2E",
                limit: this.state.count
            },
            ({data}) => {
                let page = data.length/app.state.limit;
                app.setState({pageNum:page});
            }
        );
    }

    handlePageClick = ({selected}) => {
        const app = this;
        app.setState({offset: (selected) * this.state.limit});
        app.feedNews(FB);
    };

    componentWillMount(){
        this.facebook();
    }

    render() {
        const posts = this.state.posts;
        return (
            <div className="row">
                    {posts.map((c, i) =>
                        <Photo
                            key={i}
                            img={c.picture}
                            desc={c.message}
                        />
                    )}
                    <ReactPaginate pageNum={this.state.pageNum}
                                   containerClassName={"pagination"}
                                   clickCallback={this.handlePageClick.bind(this)}
                                   activeClassName={"active"}
                    />
            </div>
        );
    }
}

export default App;