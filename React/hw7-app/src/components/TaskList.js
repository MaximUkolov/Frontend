import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading tasks...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '(Completed)' : '(Incomplete)'}
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2>Task List</h2>
      {content}
    </div>
  );
};

export default TaskList;
