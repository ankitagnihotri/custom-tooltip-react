import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component{
  
  render() {
    return (
      <div className='CustomTooltip'>
        <div className={`CustomTooltipBubble CustomTooltip-${this.props.placement}`} 
             style={{color: `${this.props.tipColor}`}}>
          <div className='CustomTooltipTextPaper CustomTooltipText' 
                style={this.props.tooltipTextPaperStyle}>{this.props.tooltipMessage}
          </div>
        </div>
        <span>
          {this.props.tooltipComponentLocation}
        </span>
      </div>
    );
  }
};

export default Tooltip;