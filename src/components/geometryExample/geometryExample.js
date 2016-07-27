'use strict';
import React from 'react';
import GeometryExampleAnimation from './geometryExampleAnimation.js';
import {updateSphere} from '../../actions/geometryExampleActions.js';
import {connect} from  'react-redux';

class GeometryExample extends React.Component {
    constructor(props){
        super(props);
      
    }

    componentWillReceiveProps(nextProps){
        this.geometryExampleAnimation.updateProps(nextProps.geometryData);
    }

    componentDidMount(){
        this.geometryExampleAnimation = new GeometryExampleAnimation('geometry-example-webgl-container',
            {updateSphere: this.props.updateSphere}, this.props.geometryData.sphereProps);;
        this.geometryExampleAnimation.init();
    }

    componentWillUnmount(){
        this.geometryExampleAnimation.destruct();
    }

    onColorChange(){
        this.props.updateSphere({color: this.sphereColor.value});
    }

    render(){
        return (<div className="geometryExample">
                <div>
                    <label>Color:</label><input ref={c => {this.sphereColor = c;}} 
                        type="color" value={this.props.geometryData.sphereProps.color} onChange={() => {this.onColorChange();}} />
                </div>
                <div className="webgl-container" id='geometry-example-webgl-container'></div>
            </div>);
    }

}

function mapDispatchToProps(dispatch){
    return {
        updateSphere: (sphereProps) => {
            dispatch(updateSphere(sphereProps));
        }
    };
}

export default connect(() => ({}), mapDispatchToProps)(GeometryExample);