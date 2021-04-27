import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../Redux/Action/TodoAction";

const TodoItem = ({ data }) => {
  const { id, text } = data || "";
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(text);
  const dispatch = useDispatch();
  const is = useSelector((state) => state.TodoReducer);
  //   console.log(is);
  const handleUpdate = () => {
    setUpdate(!update);
    const data = {
      id: id,
      updateValue: value,
    };
    if (data.updateValue) {
      //   console.log(data.updateValue);
      dispatch(updateTodo(data));
    }
  };

  const handleUpdateValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="my-5">
      <div>
        <h6>id : {id}</h6>

        {update ? (
          <input
            type="text"
            defaultValue={text}
            className="d-block mx-auto my-3"
            onChange={(e) => handleUpdateValue(e)}
          />
        ) : (
          <p>{text} </p>
        )}
        <button className="btn btn-danger" onClick={() => handleUpdate()}>
          {update ? "done" : "update"}
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
