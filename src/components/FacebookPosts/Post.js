import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
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

