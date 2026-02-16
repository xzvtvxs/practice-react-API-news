import { useQuery } from '@tanstack/react-query';
import TodoCard from './TodoCard/TodoCard';
import css from './TodosList.module.css';
import { getTodos } from '../../services/todosService';

const TodosList = () => {

  const getTodoQuery = useQuery({
    queryKey: ['getTodo'],
    queryFn: () => getTodos({}),
  });

  const todos = getTodoQuery.data?.todos || [];

  const isLoading = getTodoQuery.isLoading;

  return (
    <div className={css['todosList']}>
      {!isLoading && <ul>{todos.map((todo) => {
         return <li key={todo._id}>
           <TodoCard todo={todo} />
           
         </li>
      })}</ul>}
      {isLoading && <p>Loading data</p>}
    </div>
  );
};

export default TodosList;
