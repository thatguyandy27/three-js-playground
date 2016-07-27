'use strict';
import React from 'react';
import HelloWorldAnimation from './helloWorldAnimation.js';
import {updateBox} from '../../actions/helloWorldActions.js';
import {connect} from  'react-redux';

class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.helloWorldAnimation = new HelloWorldAnimation('hello-world-webgl-container');;
    }

    componentWillReceiveProps(nextProps){
        this.helloWorldAnimation.updateProps(nextProps.helloWorld);
    }

    componentDidMount(){
        this.helloWorldAnimation.init({updateBox: this.props.updateBox});
    }

    componentWillUnmount(){
        this.helloWorldAnimation.destruct();
    }

    render(){
        return (<div id='hello-world-webgl-container'></div>);
    }

}

function mapDispatchToProps(dispatch){
    return {
        updateBox: (boxProperties) => {
            
            dispatch(updateBox(boxProperties));
        }
    };
}

export default connect(() => ({}), mapDispatchToProps)(HelloWorld);