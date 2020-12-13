import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.TODO_ADDED:
      return [
        ...state,
        {
          ...action.todo,
          finished: false,
        }
      ];

    case actions.TODO_FINISHED:
      return state.map(todo => todo.id !== action.id
        ? todo
        : {
          ...todo,
          isFinihed: true,
        }
      );

    default:
      return state;
  }
}
