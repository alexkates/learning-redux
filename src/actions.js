import * as actions from './actionTypes';

export const todoAdded = todo => ({
  type: actions.TODO_ADDED,
  todo,
});

export const todoFinished = id => ({
  type: actions.TODO_FINISHED,
  id,
});
