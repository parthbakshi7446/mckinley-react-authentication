import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
// import UserLoading from "../../../components/userLoading";
// import * as actions from "./actions";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { Row, Avatar, UserInfo, Text } from "./styles";
// import PropTypes from "prop-types";

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null, loading: false };
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
  // handleLoadMore = e => {
  //   e.preventDefault();
  //   //add new data
  //   this.request();
  // };
  // request = () => {
  //   this.props.get("&page=" + this.props.next_page);
  // };
  renderFarm = (items = []) => {
    // console.log(items)
    if(items)
    return items.map((item, index) => {
      return (
        <Row key={index} id={item.id}>
          <Avatar>
            <img src={item.avatar} alt={item.first_name} />
          </Avatar>
          <UserInfo>
            <Text color={"firstname"} className="firstname">
              {item.first_name}
            </Text>
            <Text color={"lastname"} className="lastname">
              {item.last_name}
            </Text>
          </UserInfo>
        </Row>
      );
    });
  };
  render() {
    // const {  loading, next_page, total_pages, failure } = this.props;
    let users = <Spinner />
    if (this.state.users)
      users=this.renderFarm(this.state.users)

    return (
      <>
      
        {users}
        {/* <UserLoading isLoading={loading} /> */}
        {/* <div style={{ textAlign: "center" }}>
          {total_pages >= next_page && !loading && (
            <button className="btn load_more" onClick={this.handleLoadMore}>
              Load more...
            </button>
          )}
          {failure && !loading && (
            <button className="btn try_again" onClick={this.handleLoadMore}>
              Try again
            </button>
          )}
        </div> */}
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   loading: state.usersList.loading,
//   failure: state.usersList.failure,
//   data: state.usersList.data,
//   next_page: state.usersList.next_page,
//   total_pages: state.usersList.total_pages
// });
// const mapDispatchToProps = dispatch => {
//   const { get, deleteItem } = actions;
//   return bindActionCreators(
//     { get, deleteItem },
//     dispatch
//   );
// };
// UsersList.propTypes = {
//     loading : PropTypes.bool,
//     failure: PropTypes.bool,
//     data: PropTypes.array,
//     next_page: PropTypes.number,
//     total_pages: PropTypes.number,
//     get: PropTypes.func,
//     deleteItem: PropTypes.func,
// };
export default UsersList;

// class UsersList extends Component {

//   constructor(props){
//     super(props)
//     this.state={
//       users:null,
//       loading:false,error:false
//     }
//   }

// }
