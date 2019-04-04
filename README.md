# Tooltip Component in React
A library of React components created using `create-react-app`.
## Installation
Run the following command:
`npm install custom-tooltip-react`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

A basic understanding of React.js


### Props
|  Prop Name          | Prop Type           | Prop Definition   |
| ------------- |:-------------:| :-----:|
| tooltipComponentLocation      | String or JSX  | Element on which tooltip is hovered   |
| tooltipMessage      | String or JSX     |  Content of tooltip   |
| placement | String     |    right, left, top & bottom position |
| style | object     |  Style of the element     |


### Examples
Example specific to react
```
import Tooltip from 'custom-tooltip-react';

  <Tooltip tooltipComponentLocation={"tooltip Button"}
           tooltipMessage={'Hello, I am a super cool tooltip'}
           placement={'bottom'} // you can give right, left, top & bottom position
           style={customStyleTooltip}
  />

  let customStyleTooltip = {
    backgroundColor: '#e7b770',
    color: '#333'
  }
```


## Authors

[Ankit Agnihotri](https://github.com/ankitagnihotri)
