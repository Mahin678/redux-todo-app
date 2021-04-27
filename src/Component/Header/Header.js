import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { createTodo } from "../../Redux/Action/TodoAction";
import TodoItem from "../TodoItem/TodoItem";

// const stateDispatchToProps = (dispatch) => {
// 	return {
// 		createTodo: (data) => dispatch(createTodo(data)),
// 	};
// };

const Header = (props) => {
  const toDos = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 className="text-center">Todo apps</h1>
      <div className="container d-flex justify-content-center mt-5">
        <input
          onBlur={(e) => setValue(e.target.value)}
          type="text"
          className="form-control w-50"
        />
        <button
          className="btn btn-success"
          onClick={() =>
            dispatch(
              createTodo({
                id: Math.round(Math.random() * 500),
                text: value,
              })
            )
          }
        >
          add
        </button>
      </div>
      <div className="text-center my-5">
        {toDos.map((data, i) => (
          <TodoItem key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Header;

// connect((state) => ({}), { createTodo })(Header)
// import React from 'react';
// import { connect } from 'react-redux';
// import createTodo from '../../Redux/Action/TodoAction';
// import { useDispatch } from 'react-redux';

// // const stateDispatchToProps = (dispatch) => {
// // 	return {
// // 		createTodo: (data) => dispatch(createTodo(data)),
// // 	};
// // };
// // const mapDispatchToProps = (dispatch) => {
// // 	return {
// // 		createTodo: (data) => dispatch(createTodo(data)),
// // 	};
// // };

// // const mapStateToProps = (state) => {
// // 	return {
// // 		buyerDataPost: state.buyerDataPost,
// // 	};
// // };

// const Header = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 			<button onClick={() => props.createTodo('5')}>add</button>
// 		</div>
// 	);
// };
// const mapStateToProps = (state) => {
// 	return {
// 		id: state.createTodo.id,
// 	};
// };

// export default connect(mapStateToProps, createTodo)(Header);
