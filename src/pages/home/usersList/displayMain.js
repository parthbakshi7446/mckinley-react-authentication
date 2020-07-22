import React,{Component} from "react";
import {FaHome} from "react-icons/fa";
import TopCard from "./topCard";
import {Chart} from "react-google-charts";

class DisplayMain extends Component{
    render(){
        return (
            <div>
                <div style={{display:"flex",alignItems:"center",width:"30%",justifyContent:"space-evenly",height:"50px"}}>
                    <h2 style={{color:"white"}}>Home</h2>
                    <FaHome />
                    <h5>Home - DashBoard</h5>
                </div>
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <div style={{width:"25%",backgroundColor:"bla",height:"233px"}}> 
                        <TopCard icon="https://cdn1.iconfinder.com/data/icons/flat-design-basic-set-2/24/trend-up-direction-512.png"/>
                        <TopCard icon="https://cdn1.iconfinder.com/data/icons/flat-design-basic-set-2/24/trend-down-direction-512.png"/>
                    </div>
                    <div style={{width:"70%",borderRadius:"10px",backgroundColor:"white",padding:"5px",height:"190px"}}>
                        <Chart
                            width={'98%'}
                            height={'98%'}
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['x', 'Month'],
                                [0, 0],
                                [1, 10],
                                [2, 23],
                                [3, 17],
                                [4, 18],
                                [5, 9],
                                [6, 11],
                                [7, 27],
                                [8, 33],
                                [9, 40],
                                [10, 32],
                                [11, 35],
                            ]}
                            options={{
                                hAxis: {
                                title: 'Users',
                                },
                                vAxis: {
                                title: 'Month',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            />
                    </div>
                </div>
            </div>
        );
    }
}
export default DisplayMain;