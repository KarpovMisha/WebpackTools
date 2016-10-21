import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';
import ReactPaginate from 'react-paginate';

class Photo extends React.Component {
    render() {
        return (
            <div className="photo">
                <img src={this.props.img}/>
                <div className="desc">{this.props.desc}</div>
            </div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            offset: 0,
            pageNum: 0,
            limit: 3,
            count: 9
        };
    }

    facebook() {
        var app = this;
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
        var app = this;
        FB.api(
            'talkpr/posts?fields=message,picture',
            {
                "access_token": "1824715864406732|Jv4js3dY0kP2XvC8-0O8p91Nm2E",
                limit: this.state.limit,
                offset: this.state.offset
            },
            function (response) {
                app.setState({posts: response.data});
            }
        );
    }

    newsOnePage(FB){
        var app = this;
        FB.api(
            'talkpr/posts?fields=message,picture',
            {
                "access_token": "1824715864406732|Jv4js3dY0kP2XvC8-0O8p91Nm2E",
                limit: this.state.count
            },
            function (response) {
                let page = response.data.length/2;
                app.setState({pageNum:page});
            }
        );
    }

    handlePageClick(data) {
        var app = this;
        console.log(data.selected);
        if(data.selected == 0){
            app.setState({offset: 0});
            app.feedNews(FB);
        }else {
            app.setState({offset: (data.selected + 1) * this.state.limit});
            app.feedNews(FB);
        }
    }

    componentWillMount(){
        this.facebook();
    }

    render() {
        var photoList = this.state.posts.map(function (photo, index) {
            return (
                    <Photo key={index} img={photo.picture} desc={photo.message}/>
            )
        });
        return (
            <div>
                <div className="row">
                    {photoList}
                    <ReactPaginate clickCallback={this.handlePageClick}
                                   pageNum={this.state.pageNum}
                                   containerClassName={"pagination"}
                                   clickCallback={this.handlePageClick.bind(this)}
                                   activeClassName={"active"}/>
                </div>
            </div>
        );
    }
}

export default App;