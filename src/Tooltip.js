import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component{
  
  render() {
    let position = this.props.position
    return (
      <div className='CustomTooltip'>
        <div className={`CustomTooltipBubble CustomTooltip-${position}`}>
        <div className='CustomTooltipMessage' style={this.props.style}>{this.props.hoverText}</div>
        </div>
        <span>
          {this.props.hoverComponentName}
        </span>
      </div>
    );
  }
};

export default Tooltip;