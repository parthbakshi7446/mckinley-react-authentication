import React, { Component } from "react";
import {Headerr, Search, Img, HeaderRight} from "./header_style";
import {FaBell, FaQuestionCircle, FaSearch} from "react-icons/fa";

class Header extends Component{
    render(){
        return(
            <Headerr>
                <div style={{width:"80%"}}>
                    <div >
                        <FaSearch style={{marginLeft:"45px",marginTop:"9px",color:"black",position:"absolute"}} />
                        <Search placeholder="          Search"/>
                    </div>
                    
                </div>
                <HeaderRight>
                    <FaBell />
                    <FaQuestionCircle />
                    <Img src="https://he-s3.s3.amazonaws.com/media/avatars/parthbakshi7446/resized/180/191aa9bimage.jpg"/>
                    <span>Parth Bakshi</span>
                </HeaderRight>
            </ Headerr >
        )
    }
}

export default Header;