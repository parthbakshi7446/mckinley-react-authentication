import React, { Component } from 'react'
import {FontAwesome} from "react-icons/fa";
import {FaHome,FaEnvelope,FaCube,FaFilePdf,FaCommentDots,FaCalendarMinus,FaUser,FaCog,FaAlignRight} from "react-icons/fa";

import {SideBaar,SideBarHead} from './sidebar_style'

class SideDrawer extends Component{
  state = {
    navItemList: [
      {title: 'Home', icon: FaHome, pathname: '/home', color:'#7764E4'},
      {title: 'Inbox', icon: FaEnvelope, pathname: '/inbox', color:'#F98A99'},
      {title: 'Products', icon: FaCube, pathname: '/products', color:'#4CD9F3'},
      {title: 'Invoices', icon: FaFilePdf, pathname: '/products', color:'orange'},
      {title: 'Messages', icon: FaCommentDots, pathname: '/products', color:'yellow'},
      {title: 'Calender', icon: FaCalendarMinus, pathname: '/products', color:'red'},
      {title: 'Customers', icon: FaUser, pathname: '/products', color:'cyan'},
      {title: 'Settings', icon: FaCog, pathname: '/products', color:'orange'}
    ]
  };

  render(){
    const navItems = this.state.navItemList.map((navItem, i)=> {
      return (
          <SideBaar>
              <navItem.icon style={{color:navItem.color,marginRight:"7px",marginLeft:"25px"}}/>
              <p>{navItem.title}</p>
          </SideBaar>
        //   
      );
    });
    return (
        <div style={{border:"0px solid black"}} >
          <SideBarHead>
            <h1 style={{padding: '10px',marginLeft:"-100px"}}>Users <span className={" material-icons"}></span></h1>
            <FaAlignRight style={{marginRight:"-130px"}}/>
          </SideBarHead>
          
          {navItems}
        </div>
    );
  }
};

export default SideDrawer;
