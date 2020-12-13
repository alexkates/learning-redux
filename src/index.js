import store from './store';
import { v4 as uuidv4 } from 'uuid';

import {
  todoAdded,
  todoFinished,
} from './actions';


store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

const todo1 = {
  id: uuidv4(),
  description: 'Learn Redux'
};

const todo2 = {
  id: uuidv4(),
  description: 'Commit repo to git'
};

store.dispatch(todoAdded(todo1));
store.dispatch(todoAdded(todo2));

store.dispatch(todoFinished(todo1.id));
