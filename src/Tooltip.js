import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component{  
  render() {
    return (
      <div className='CustomTooltip'>
        <div className={`CustomTooltipBubble CustomTooltip-${this.props.placement}`} style={{color: `${this.props.tipColor}`}}>
          <div className='CustomTooltipTextPaper' style={this.props.tooltipTextPaperStyle}>
            <div className='CustomTooltipText'>{this.props.tooltipMessage}</div>
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