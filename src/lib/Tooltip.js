/**
 * @Author: ankit
 * @Date:   2019-04-01T03:07:49+05:30
 * @Email:  ankit@minance.com
 * @Last modified by:   ankit
 * @Last modified time: 2019-04-02T18:47:22+05:30
 * @Copyright: Minance Technologies Private Limited
 */

import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component{
  
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
