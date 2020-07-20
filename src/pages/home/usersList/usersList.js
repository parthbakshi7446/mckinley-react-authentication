import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as service from "../../../utils/services";
import {Redirect} from "react-router-dom";

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
        <div key={index} id={item.id}>
          <div>
            <img src={item.avatar} alt={item.first_name} />
          </div>
          <div>
            <div color={"firstname"} className="firstname">
              {item.first_name}
            </div>
            <div color={"lastname"} className="lastname">
              {item.last_name}
            </div>
          </div>
        </div>
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
        <button className="btn logout" onClick={this.handleLogOut}>log out</button>
        {users}
        
      </>
    );
  }
}


export default UsersList;
