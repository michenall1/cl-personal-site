import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPhoto} from '../../app/actions/photos';
import _ from 'lodash';

class Gallery extends Component {
  componentWillMount() {
    
  }

  render () {
    return (
      <div>
        {this.props.params.galleryName}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    galleries: state.galleries.data,
    isFetching: state.galleries.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPhoto}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
