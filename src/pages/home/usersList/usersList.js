import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as service from "../../../utils/services";
import {Redirect} from "react-router-dom";
import {Image, Info, InfoSet,SideBaar, UserSet,Outer, Img, Headingg} from "./style_userList";
import SideBar from "./sidebar";
import Top from "./top";

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null, loading: false,logIn:true };
  }
  componentDidMount() {
    if (!this.state.users) {
      axios
        .get("https://reqres.in/api/users")
        .then((res) => {
          console.log(res)
          this.setState({ users: res.data.data });
        })
        .catch((error) => {
          this.setState({ error: true });
        });
    }
  }
  handleLogOut = e =>{
    e.preventDefault();
    service.logOut();
    this.setState({logIn:false});
    
  };
  renderHelper = (items = []) => {
    // console.log(items)
    if(items)
    return items.map((item, index) => {
      return (
        <InfoSet key={index} id={item.id}>
          <Image>
            <Img src={item.avatar} alt={item.first_name} />
          </Image>
        
          <Info>
            {item.first_name}
          </Info>
          <Info >
            {item.last_name}
          </Info>
          <Info>
            {item.email}
          </Info>
        
        </InfoSet>
      );
    });
  };
  render() {
    let users = <Spinner />
    if (this.state.users)
      users=this.renderHelper(this.state.users)
    if(!this.state.logIn){
      users = <Redirect to={{pathname: "/login"}} />
    }
    return (
      <>
        <div>
          <button className="btn logout" onClick={this.handleLogOut}>log out</button>
          <SideBaar>
            <SideBar/>
          </SideBaar>
          
          <div>
            <Outer>
              <p style={{color:"white"}}>Home</p>
              <Top/>
              <Top/>
              <Top/>
            </Outer>
            
            <UserSet>
              <Headingg >User Table</Headingg>
              {users}
            </UserSet>
          </div>
          
        </div>
        
        
        
      </>
    );
  }
}


export default UsersList;
