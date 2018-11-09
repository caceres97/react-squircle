import React, { Component } from 'react';

class ReactSquircle extends Component {
  render() {
    const { imageUrl, width, height, className, onClick, fit } = this.props

    return (
      <div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="squircle" clipPathUnits="objectBoundingBox">
              <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />
            </clipPath>
          </defs>
        </svg>

        <img onClick={onClick} style={{"clip-path": "url(#squircle)", "height": height, "width": width, "objectFit": fit  }} className={ className } src={ imageUrl } />
      </div>
    );
  }
}

export default ReactSquircle;
