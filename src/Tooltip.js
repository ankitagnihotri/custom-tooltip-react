import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component{
  
  render() {
    return (
      <div className='CustomTooltip'>
        <div className={`CustomTooltipBubble CustomTooltip-${this.props.placement}`}>
        <div className='CustomTooltipMessage' style={this.props.style}>{this.props.tooltipMessage}</div>
        </div>
        <span>
          {this.props.tooltipComponentLocation}
        </span>
      </div>
    );
  }
};

export default Tooltip;