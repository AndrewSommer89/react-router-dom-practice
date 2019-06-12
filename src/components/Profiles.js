import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

function Profiles(props) {
  const userDivs = props.users.map((user,i) => {
    return (
      <div key={i}>
        {user.firstName} - {user.lastName}
        <Link to={"/profile" + user.id}>View</Link>
      </div>);
  });
  return (   
    <div>
      Profiles:
      <div>{userDivs}</div>
    </div>
  );
}

export default connect(function (state) {
  return {users: state.users};
})(Profiles);


