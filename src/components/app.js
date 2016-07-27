import React from 'react';
import {connect} from  'react-redux';
import {selectPage} from '../actions/pageActions.js';
import PAGE_CONSTANTS from '../constants/pageConstants.js';
import Nav from './layout/nav.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HelloWorld from './helloWorld/helloWorld.js';
import GeometryExample from './geometryExample/geometryExample.js';
import CustomTriangle from './customTriangle/customTriangle.js';
import Wave from './wave/wave.js';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        let content;

        switch(this.props.page.selected){

            case PAGE_CONSTANTS.PAGES.GEOMETRY_EXAMPLE:
                content = (<GeometryExample geometryData={this.props.geometryData}></GeometryExample>);
                break;
            case PAGE_CONSTANTS.PAGES.CUSTOM_TRIANGLE:
                content = (<CustomTriangle  customTriangle={this.props.customTriangle}></CustomTriangle>);
                break;
            case PAGE_CONSTANTS.PAGES.WAVE:
                content = (<Wave waveProps={this.props.waveProps}></Wave>);
                break;
            case PAGE_CONSTANTS.PAGES.HELLO_WORLD:
            default:
                content = (<HelloWorld helloWorld={this.props.helloWorld}></HelloWorld>);
                break;
        }

        return (
            <MuiThemeProvider>
                <div className='app'>
                    <div className='navContainer'>
                        <Nav selected={this.props.page.selected} onSelect={this.props.selectPage} />
                    </div>
                    <div className='mainContent' selected={this.props.page.selected}>
                        {content}
                    </div>
                </div>
            </MuiThemeProvider>);
    }
}


function mapStateToProps(state){

    return {
        page: state.page,
        helloWorld: state.helloWorld,
        geometryData: state.geometryData,
        customTriangle: state.customTriangle,
        waveProps: state.wave
    };
}

function mapDispatchToProps(dispatch){
    return {
        selectPage: (event, page) => {
            dispatch(selectPage(page));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);