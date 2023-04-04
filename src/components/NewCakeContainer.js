import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  console.log(props);
  const [number, setNumber] = useState(1);
  function inputChangeHandler(e) {
    setNumber(e.target.value);
  }
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        placeholder="Enter number of cakes"
        onChange={inputChangeHandler}
        value={number}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {
      dispatch(buyCake(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
