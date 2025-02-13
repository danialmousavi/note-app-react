import React, { Component } from 'react'

export default class ColorBox extends Component {
render() {
    let { color,onColor } = this.props;
    
        return (
            <div className='color-box' style={{backgroundColor:color}} onClick={()=>onColor(color)}>
                
            </div>
        )
    }
}
