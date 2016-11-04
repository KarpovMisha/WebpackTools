import React, { Component, PropTypes } from 'react';
import myPosts from './posts';

export default class Photo extends Component {
    static propTypes = {
        desc: PropTypes.string,
        img: PropTypes.string.isRequired
    }

    render() {
        const {img, desc} = this.props;

        return (

            <div className="photo">
                <img src={img} />
                <div className="desc">{desc}</div>
            </div>
        );
    }
}

