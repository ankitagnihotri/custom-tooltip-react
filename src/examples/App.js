/**
 * @Author: ankit
 * @Date:   1985-10-26T13:45:00+05:30
 * @Email:  ankit@minance.com
 * @Last modified by:   ankit
 * @Last modified time: 2019-04-02T16:17:59+05:30
 * @Copyright: Minance Technologies Private Limited
 */
import React, { Component } from 'react';
import Tooltip from './../lib/Tooltip'

let customStyleTooltip = {
  backgroundColor: '#e7b770',
  color: '#333'
}

class App extends Component {
  render() {
    return (
      <div className='container'>
        <p>
         <Tooltip hoverComponentName={"tooltip Top"}
                  hoverText={'Hello, I am a super cool tooltip'}
                  position={'top'}
                  style={customStyleTooltip}/>
        </p>
        <p>
        <Tooltip hoverComponentName={"tooltip Bottom"}
                 hoverText={'Hello, I am a super cool tooltip'}
                 position={'bottom'}
                 style={customStyleTooltip}/>
        </p>
        <p>
        <Tooltip hoverComponentName={"tooltip Right"}
                 hoverText={'Hello, I am a super cool tooltip'}
                 position={'right'}
                 style={customStyleTooltip}/>
        </p>
        <p>
        <Tooltip hoverComponentName={"tooltip Left"}
                 hoverText={'Hello, I am a super cool tooltip'}
                 position={'left'}
                 style={customStyleTooltip}/>
        </p>
      </div>
    );
  }
}

export default App;
