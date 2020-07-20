import React, { Component } from "react";
import { Row, Avatar, UserInfo, Text } from "./styles";

export class UsersList extends Component {
  componentDidMount() {
    // only call Api request if stored data is not completed
    if (this.props.total_pages >= this.props.next_page) {
      this.request();
    }
  }
  handleLoadMore = e => {
    e.preventDefault();
    //add new data
    this.request();
  };
  request = () => {
    this.props.get("&page=" + this.props.next_page);
  };
  renderFarm = (items =[]) => {
    return items.map((item, index) => {
      return (
        <Row key={index} id={item.id}>
          <Avatar>
            <img src={item.avatar} alt={item.first_name} />
          </Avatar>
          <UserInfo>
            <Text color={"firstname"} className='firstname'>{item.first_name}</Text>
            <Text color={"lastname"}  className='lastname'>{item.last_name}</Text>
          </UserInfo>
        </Row>
      );
    });
  };
  render() {
    const { data, loading, next_page, total_pages, failure } = this.props;
    return (
      <>
        {this.renderFarm(data)}
        <div style={{ textAlign: "center" }}>
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
        </div>
      </>
    );
  }
}

export default UsersList;
