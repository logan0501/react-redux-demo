import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { connect } from "react-redux";

function UserContainer({ userData, getData }) {
  useEffect(() => {
    getData();
  }, []);
  return userData.loading ? (
    <div>Loading</div>
  ) : userData.error ? (
    <div>userData.error</div>
  ) : (
    <ul>
      {userData.users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
