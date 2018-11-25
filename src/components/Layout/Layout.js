import React, { Component } from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    sideDrawerClosedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer};
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    opened={this.sideDrawerOpenHandler}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;