import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Todo } from '../../../types/todos';
import css from './TodoCard.module.css';
import { deliteTodos } from '../../../services/todosService';
interface TodoCardProps{
  todo: Todo,
}
const TodoCard = ({ todo }: TodoCardProps) => {

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ['deliteTodos'],
    mutationFn: (todoId: string) => deliteTodos(todoId), 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getTodo'],
      })
    }
  })

  return (
    <div className={css['todoCard']}>
      <p>{todo.category} {todo.completed} {todo.title}</p>
      <button type='button' onClick={() => deleteMutation.mutate(todo._id)}>Delite</button>
    </div>
  );
};

export default TodoCard;