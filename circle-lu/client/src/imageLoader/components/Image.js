import React from 'react';
import Spinner from './Spinner';

export default class ImageLoader extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    alt: React.PropTypes.string
  };
  
  static defaultProps = {
    src: '',
    alt: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <div className={`image-overlay image-overlay-${this.state.isLoading ? 'on' : 'off'}`}>
          <Spinner loading={this.state.isLoading} />
        </div>
        <img width={1000} onLoad={() => this.setState({isLoading: false})} src={this.state.src} alt={this.props.alt} {...this.props}/>
      </div>
    );
  }
}

