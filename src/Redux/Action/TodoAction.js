import * as Type from './Type';
console.log(Type);
export const createTodo = (data) => (dispatch) => {
	dispatch({ type: Type.CREATE_TODO, payload: data });
};

export const deleteTodo = (id) => (dispatch) => {
	dispatch({ type: Type.DELETE_TODO, payload: id });
};

export const updateTodo = (data) => (dispatch) => {
	dispatch({ type: Type.UPDATE_TODO, payload: data });
};

// import * as Types from './Type';
// const createTodo = (data) => {
// 	return {
// 		type: Types.CREATE_TODO,
// 		payload: data,
// 	};
// 	// dispatch({ type: Types.CREATE_TODO, id: data });
// };
// export default createTodo;
