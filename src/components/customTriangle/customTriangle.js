'use strict';
import React from 'react';
 import CustomTriangleAnimation from './customTriangleAnimation.js';
// import {updateBox} from '../../actions/helloWorldActions.js';
import {connect} from  'react-redux';

class CustomTriangle extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        this.customTriangleAnimation.updateProps(nextProps.customTriangle);
    }

    componentDidMount(){
        this.customTriangleAnimation = new CustomTriangleAnimation('custom-triangle-webgl-container',
            {}, this.props.customTriangle);;
        this.customTriangleAnimation.init();
    }

    componentWillUnmount(){
        this.customTriangleAnimation.destruct();
    }

    render(){
        return (<div className='customTriangleContainer'>
                <div className="webgl-container" id='custom-triangle-webgl-container' />
            </div>);
    }

}

export default connect(() => ({}), () => ({}))(CustomTriangle);