import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchGalleries} from '../actions/galleries';
import {fetchPhoto} from '../actions/photos';
import Nav from '../components/Nav';
import _ from 'lodash';
import Image from '../../imageLoader/components/Image';

class App extends Component {
  static propTypes = {
    fetchGalleries: React.PropTypes.func,
    galleries: React.PropTypes.array,
    isFetching: React.PropTypes.bool
  };
  
  constructor(props) {
    super(props);
    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.fetchPhotosOfGallery = this.fetchPhotosOfGallery.bind(this);
  }

  fetchPhotos(galleries) {
    galleries.forEach((gallery) => {
      if (gallery.name === this.props.params.galleryName) {
        gallery.images.forEach((image) => {
          this.props.fetchPhoto(image);
        });
      } else {
        if (gallery.images.length > 0) {
          this.props.fetchPhoto(gallery.images[0]);
        }
      }
    });
  }

  fetchPhotosOfGallery(galleryName) {
    const gallery = _.find(this.props.galleries, g => g.name === galleryName);
    const images = _.get(gallery, 'images', []);
    images.forEach((image) => {
      this.props.fetchPhoto(image);
    });
  }

  componentWillMount() {
    this.props.fetchGalleries(this.fetchPhotos);
  }

  render() {
    return (
      <div>
        <Nav galleries={this.props.galleries} fetchPhotosOfGallery={this.fetchPhotosOfGallery} />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    galleries: state.galleries.data,
    isFetching: state.galleries.isFetching,
    photos: state.photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchGalleries, fetchPhoto}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
