import React, { Component } from 'react'


import {SideBaar} from './sidebar_style'

class SideDrawer extends Component{
  state = {
    navItemList: [
      {title: 'Home', icon: 'home', pathname: '/home', color:'#7764E4'},
      {title: 'Inbox', icon: 'email', pathname: '/inbox', color:'#F98A99'},
      {title: 'Products', icon: 'widgets', pathname: '/products', color:'#4CD9F3'}
    ]
  };

  render(){
    const navItems = this.state.navItemList.map((navItem, i)=> {
      return (
          <SideBaar>
              <p>{navItem.title}</p>
              {/* <p>{navItem.pathname}</p> */}
          </SideBaar>
        //   
      );
    });
    return (
        <div >
          <h1 style={{padding: '10px'}}>Users <span className={" material-icons"}></span></h1>
          {navItems}
        </div>
    );
  }
};

export default SideDrawer;
