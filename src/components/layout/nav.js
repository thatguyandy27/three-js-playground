import React from 'react';
import pageConstants from '../../constants/pageConstants.js';
import { List, ListItem, MakeSelectable } from 'material-ui/List';

let SelectableList = MakeSelectable(List);

class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let navItems = [];

        for (let nav in pageConstants.PAGES){
            let page = pageConstants.PAGES[nav];
            navItems.push(<ListItem key={nav} primaryText={page} value={page}></ListItem> );
        }
        
        return (
            <SelectableList value={this.props.selected} onChange={this.props.onSelect}>
                {navItems}
            </SelectableList>
        );
    }
};

export default Nav;