import React,{Component} from "react";
import {Box} from "./top_style";

class Top extends Component{
    render(){

        return (
            <div style={{color:"black"}} >
                
                <Box >
                    <div style={{display:"flex"}}>
                        <div style={{display:"flex",flexDirection:"column",width:"60%"}}>
                            <span style={{margin:"5px"}}>Total Users</span>
                            <span style={{margin:"5px"}}>25,300</span>
                        </div>
                        <div style={{backgroundColor:"",width:"50px",height:"50px"}}>
                            <img style={{height:"100%",width:"100%"}} src={this.props.icon}/>
                        </div>
                        
                    </div>
                    <div style={{justifyContent:"center",display:"flex"}}>
                        <p ><span style={{color:"green"}}>5% </span>since last month.</p>
                    </div>
                    
                </Box>
                
            </div>
        )
    }
}

export default Top;