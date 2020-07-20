import React,{Component} from "react";
import {Box} from "./top_style";

class Top extends Component{
    render(){

        return (
            <div  >
                
            <Box className={'row'}>
                <div className={'col-md-6'}>
                <p >Total Users</p>
                <p >25,300</p>
                </div>
                <div className={'col-md-6'}>
                <span >show_chart</span>
                </div>
            </Box>
            <div className={'row'}>
                <p style={{color:"white"}}><span style={{color:"yellow"}}>5% </span>since last month.</p>
            </div>
            </div>
        )
    }
}

export default Top;