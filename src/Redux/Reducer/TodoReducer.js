import * as Type from "../Action/Type";

const int = [];
const TodoReducer = (state = int, action) => {
  switch (action.type) {
    case Type.DELETE_TODO:
      let allData = [...state];
      let data = allData.filter((info) => info.id !== action.payload);
      return data;
    case Type.CREATE_TODO:
      let todo = [...state];
      todo.push(action.payload);
      return todo;

    case Type.UPDATE_TODO:
      // let updateValue = state.find((todo) => todo.id == action.payload.id);
      // let exestingTodo = state.filter((todo) => todo.id !== action.payload.id);
      // updateValue.text = action.payload.updateValue;
      // updateValue.id = action.payload.id;
      // exestingTodo.push(updateValue);
      let allTodo = [...state];
      let newTodos = allTodo.map((todo) => {
        if (todo.id == action.payload.id) {
          // update if found the updated todo
          todo.text = action.payload.updateValue;
          return todo;
        } else {
          // else return origin without modify
          return todo;
        }
      });
      return newTodos;

    default:
      return state;
  }
};
export default TodoReducer;

// import * as Type from '../Action/Type';
// const int = {
// 	id: '',
// };
// const createTodo = (state = int, action) => {
// 	switch (action.types) {
// 		case Type.CREATE_TODO:
// 			return {
// 				...state,
// 				id: action.payload,
// 				text: state.text,
// 				completed: false,
// 			};
// 		default:
// 			return state;
// 	}
// };
// export default createTodo;
