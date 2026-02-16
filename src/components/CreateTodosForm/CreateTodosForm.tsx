import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateTodosBody } from '../../types/todos';
import css from './CreateTodosForm.module.css';
import { createTodos } from '../../services/todosService';


const CreateTodosForm = () => {

    const queryClient = useQueryClient();

    const createMutetion = useMutation({
        mutationKey: ['createTodo'],
        mutationFn: (todoBody: CreateTodosBody) => createTodos(todoBody),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getTodo'],
            })
        }
    });
    
    const handlelSubmit = (formData: FormData) => {

        const titleValue = formData.get('title') as string;
        const descrValue = formData.get('description') as string;
        const categoryValue = formData.get('category') as string;

        const allValue = {
            title: titleValue,
            description: descrValue,
            category: categoryValue,
        }

        createMutetion.mutate(allValue);
    }

  return (
    <div className={css['createTodosForm']}>
          <form action={handlelSubmit}>
              <input type='text' name='title'/>
              <input type='text' name='description'/>
              <input type='text' name='category' />
              <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateTodosForm;