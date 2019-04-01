/**
 * @Author: ankit
 * @Date:   2019-04-01T03:07:49+05:30
 * @Email:  ankit@minance.com
 * @Last modified by:   ankit
 * @Last modified time: 2019-04-01T03:31:07+05:30
 * @Copyright: Minance Technologies Private Limited
 */

 import React from 'react';
 import './Tooltip.css';

 class Tooltip extends React.Component{
   constructor(props) {
     super(props)

     this.state = {
       displayTooltip: false
     }
   }

   hideTooltip = () => {
     this.setState({displayTooltip: false})

   }
   showTooltip = () => {
     this.setState({displayTooltip: true})
   }

   render() {
     let position = this.props.position
     return (
       <span className='CustomTooltip' onMouseLeave={() => this.hideTooltip()}>
      {this.state.displayTooltip &&
        <div className={`CustomTooltipBubble CustomTooltip-${position}`}>
         <div className='CustomTooltipMessage' style={this.props.style}>{this.props.hoverText}</div>
         </div>
      }
      <span onMouseOver={() => this.showTooltip()}>
        {this.props.children}
      </span>
    </span>
     );
   }
 };

 export default Tooltip;
