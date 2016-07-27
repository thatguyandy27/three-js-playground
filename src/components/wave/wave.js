'use strict';
import React from 'react';
import WaveAnimation from './waveAnimation.js';
import {updatePosition} from '../../actions/waveActions.js';
import {connect} from  'react-redux';

class Wave extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        this.waveAnimation.updateProps(nextProps.waveProps);
    }

    componentDidMount(){
        this.waveAnimation = new WaveAnimation('wave-webgl-container',
            {updatePosition: this.props.updatePosition}, this.props.waveProps);;
        this.waveAnimation.init();
    }

    componentWillUnmount(){
        this.waveAnimation.destruct();
    }

    render(){
        return (<div className="wave">
                <div className="webgl-container" id='wave-webgl-container'></div>
            </div>);
    }

}

function mapDispatchToProps(dispatch){
    return {
        updatePosition: (position) => {
            dispatch(updatePosition(position));
        }
    };
}

export default connect(() => ({}), mapDispatchToProps)(Wave);