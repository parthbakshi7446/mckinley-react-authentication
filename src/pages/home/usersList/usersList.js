import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as service from "../../../utils/services";
import {Redirect} from "react-router-dom";
import {Image, Info,Container, InfoSet,SideBaar, UserSet,Outer, Img, Headingg} from "./style_userList";
import {FaSort} from "react-icons/fa";
import SideBar from "./sidebar";
import Header from "./header";
import DisplayMain from "./displayMain";

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null, loading: false,logIn:true ,page:1};
  }
  componentDidMount() {
    if (!this.state.users) {
      axios
        .get("https://reqres.in/api/users?page="+this.state.page)
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
      let styleTrans = {backgroundColor:"rgb(233,245,248)"}
      return (
        <InfoSet key={index} id={item.id} style={index%2!=0 ? styleTrans:{}}>
          <Image>
            <Img src={item.avatar} alt={item.first_name} />
          </Image>
        
          <Info>
            {item.first_name}
          </Info>
          <Info >
            {item.last_name}
          </Info>
          <Info style={{marginRight:"-90px"}}>
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
      
      <Container>
        <button className="btn logout" style={{cursor:"pointer"}} onClick={this.handleLogOut}>log out</button>
        <SideBaar>
          <SideBar/>
        </SideBaar>
        
        <div>
          <Outer>
            <Header/>
            <DisplayMain />
            
          </Outer>
          
          <UserSet>
            
            <Headingg style={{marginTop:"18px"}}>User Table</Headingg>
            <InfoSet key={-1} style={{backgroundColor:"rgb(233,245,248)"}}>
              <Info>
                User
                <FaSort/>
              </Info>
              <Info>
                First Name
                <FaSort/>
              </Info>
              <Info >
                Last Name
                <FaSort/>
              </Info>
              <Info>
                Email
              </Info>
            
            </InfoSet>
            {users}
          </UserSet>
        </div>
        
      </Container>
      
      
      
    
    );
  }
}


export default UsersList;
