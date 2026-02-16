import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Item } from '../../../types/lessons';
import css from './LessonCard.module.css';
import { deleteLessons } from '../../../services/lessonsService';
interface LessonCardProps{
    lesson: Item,
}
const LessonCard = ({ lesson }: LessonCardProps) => {
  
  const queryClient = useQueryClient();

  const lessonsMutation = useMutation({
    mutationKey: ['onDelete'],
    mutationFn: (lessonId: string) => deleteLessons(lessonId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getLessons']
      })
    }
  })

  const handleDelete = () => {
    lessonsMutation.mutate(lesson._id)
  }

  return (
    <div className={css['lessonCard']}>
      <p>{lesson.teacher} {lesson.title}</p>
      <button type='button' onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default LessonCard;