import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import List from './List';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const handleClickDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return <List tasks={tasks} onClickDelete={handleClickDeleteTask} />;
}
