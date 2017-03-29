import React, { Component } from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  static propTypes = {
    galleries: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks(galleries) {
    return galleries.map((gallery) => {
      return (
        <li key={gallery._id}>
          <Link to={`/gallery/${gallery.name}`} onClick={() => {this.props.fetchPhotosOfGallery(gallery.name)}}>
            {gallery.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderLinks(this.props.galleries)}
      </ul>
    );
  }
}

export default Nav;