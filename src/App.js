/**
 * @Author: ankit
 * @Date:   1985-10-26T13:45:00+05:30
 * @Email:  ankit@minance.com
 * @Last modified by:   ankit
 * @Last modified time: 2019-04-01T03:35:14+05:30
 * @Copyright: Minance Technologies Private Limited
 */
import React, { Component } from 'react';
import Tooltip from './Tooltip'

let customStyleTooltip = {
  backgroundColor: '#e7b770',
  color: '#333'
}

class App extends Component {
  render() {
    return (
      <div className='container'>
        <p>
         <Tooltip hoverText={'Hello, I am a super cool tooltip'}
                  position={'top'}
                  style={customStyleTooltip}>tooltip Top</Tooltip>
        </p>
        <p>
        <Tooltip hoverText={'Hello, I am a super cool tooltip'}
                 position={'bottom'}
                 style={customStyleTooltip}>tooltip Bottom</Tooltip>
        </p>
        <p>
        <Tooltip hoverText={'Hello, I am a super cool tooltip'}
                position={'right'}
                style={customStyleTooltip}>tooltip Right</Tooltip>
        </p>
        <p>
        <Tooltip hoverText={'Hello, I am a super cool tooltip'}
                  position={'left'}
                 style={customStyleTooltip}>tooltip Left</Tooltip>
        </p>
      </div>
    );
  }
}

export default App;
